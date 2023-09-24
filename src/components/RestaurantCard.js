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
        <div className="col">
            <div class="card shadow-sm">
            <img 
            className="resImg"
            alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <div class="card-body">
              <p class="card-text">{name}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">{totalRatings} STARS</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
        </div>
        </div>

    )
}

export default RestaurantCard;