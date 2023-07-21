

const RestaurantCard = (props) => {
    const {resList} = props;
    const { area, cloudinaryImageId, cuisines, totalRatings, deliveryTime, name } = resList?.data;
    console.log("props", props);
    return(
        <div className="res-card">
            <img 
            className="resImg"
            alt="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines}</p>
            <p>{totalRatings} STARS</p>
            <p>Time to deliver: {deliveryTime} </p>
        </div>
    )
}

export default RestaurantCard;