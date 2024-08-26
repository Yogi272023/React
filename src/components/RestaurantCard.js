import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    const {resData} = props;
    const {cuisines, avgRating,sla, cloudinaryImageId, costForTwo, name}=resData?.info;

    return (
      <div 
      data-testid="resCard"
      className="m-6 p-5 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-lg">
        <img 
        className="h-44 w-56 rounded-lg"
        alt="res-logo"
        src={ CDN_URL + cloudinaryImageId}/>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{sla.deliveryTime} mins</h4>
      </div>
    )
  }

export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
         return(
          <div>
            <label>Promoted</label>
            <RestaurantCard {...props}/>
          </div>
         )
    }
  }

  export default RestaurantCard;