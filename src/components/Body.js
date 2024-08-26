import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body =()=>{
  const [listOfRestaurants, setListOfRestaurants]=useState([]);
  const [filteredRestaurant, setFilteredRestaurant]=useState([]);
  const [searchText, setSearchText]=useState("");
  const {setUserInfo, loggedInUser} = useContext(UserContext);
  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5941825&lng=77.4430649&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();// converting data to json
    
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false) return <h1>Looks like you are offline!!! Please check your internet connection</h1>

  // conditional rendering
  if(listOfRestaurants.length===0){
     return <Shimmer/>
  }
    return (
      <div className="body">
        <div className="flex  m-4 p-4">
        <button 
        className="px-4 py-2 bg-gray-100 m-2 rounded-lg"
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
        className="border border-solid border-black " 
        data-testid="searchInput"
        value={searchText}
        onChange={e=>setSearchText(e.target.value)} 
        />
        <button 
        onClick={()=>{
          const filteredList=listOfRestaurants.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setFilteredRestaurant(filteredList);
        }}
        className="px-4 py-2 bg-green-100 m-2 rounded-lg">
          Search
        </button>
        </div>
        <div>
          <label>Username: </label>
          <input 
          value={loggedInUser}
          className="border border-solid border-black px-4 py-2 m-2"
          onChange={(e)=>setUserInfo(e.target.value)} />
        </div>
        </div>
        <div className="flex flex-wrap ">
        {
        filteredRestaurant.map(restaurant=>(
        <Link 
        key={restaurant.info.id}
        to={`/restaurants/${restaurant.info.id}`}
        >
          {restaurant.info.promoted 
          ? <RestaurantCardPromoted resData={restaurant} /> 
          :<RestaurantCard resData={restaurant} /> }
        </Link>
        ) )
        }
        
        </div>
      </div>
    )
  }

  export default Body;