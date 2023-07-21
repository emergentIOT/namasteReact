import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resList} = props;
    const { area, cloudinaryImageId, cuisines, totalRatings, deliveryTime, name } = resList?.data;
    console.log("props", props);
    return(
        <div className="res-card">
            <img 
            className="resImg"
            alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines}</p>
            <p>{totalRatings} STARS</p>
            <p>Time to deliver: {deliveryTime} </p>
        </div>
    )
}

export default RestaurantCard;