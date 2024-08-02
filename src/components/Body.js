import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body =()=>{
  const [listOfRestaurants, setListOfRestaurants]=useState([]);
  const [filteredRestaurant, setFilteredRestaurant]=useState([]);
  const [searchText, setSearchText]=useState("");
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5941825&lng=77.4430649&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();// converting data to json
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // conditional rendering
  if(listOfRestaurants.length===0){
     return <Shimmer/>
  }
    return (
      <div className="body">
        <div className="filter">
        <button 
        className="filter-btn"
        onClick={()=>{
          const filteredList=listOfRestaurants.filter(res=>res.info.avgRating>4.2)
          setFilteredRestaurant(filteredList);
        }}
        >
          Top Rated Restaurants
        </button>
        <div className="search">
        <input 
        type="text" 
        className="search-box" 
        value={searchText}
        onChange={e=>setSearchText(e.target.value)} 
        />
        <button 
        onClick={()=>{
          const filteredList=listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setFilteredRestaurant(filteredList);
        }}
        className="search-btn">
          Search
        </button>
        </div>
        </div>
        <div className="res-container">
        {
        filteredRestaurant.map(restaurant=>(
        <RestaurantCard 
        key={restaurant.info.id}
        resData={restaurant} />
        ) )
        }
        
        </div>
      </div>
    )
  }

  export default Body;