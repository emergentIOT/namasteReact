import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resList} = props;
    /**
     * * Optional chaining is a feature introduced in JavaScript that provides a 
     * concise way to access properties or call functions on an object that
    *  might be null or undefined without causing an error. 
    * It allows you to avoid lengthy and repetitive null checks 
    * before accessing nested properties or calling nested functions.
    */
    const {  cloudinaryImageId, cuisines, totalRatings, deliveryTime, name, avgRating } = resList?.info;
    return(
        <div className="res-card">
            <img 
            className="resImg"
            alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines}</p>
            <p>{totalRatings} STARS</p>
            <p>Time to deliver: {avgRating} </p>
        </div>
    )
}

export default RestaurantCard;