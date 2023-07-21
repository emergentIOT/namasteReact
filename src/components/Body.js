import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mock_data";


//Super power variable or STATE variable
//REACT HOOK known as useState()
//React hook is basically normal JS function   || REACT SUPERPOWER OR UTILITY FUNC


//Normal JS variable
let list = [
  {
    data: {
      "id": "531480",
      "name": "Rollsking",
      "avgRating": "3.3",
      "cloudinaryImageId": "ts2jcaq0vadhut1ccoow"
    }
  },
  {
    data: {
      "id": "53180",
      "name": "Desi dhaba",
      "avgRating": "2.0",
      "cloudinaryImageId": "y9wnicph1o0ebmmsjsau"
  }
}
];
const Body = () => {
    return (
        <>
        <div className="body">
            <div className="filter">
              {/*Print high rating value only*/}
                <button 
                className="filter-btn"
                onClick={()=>{
                  //Write filter out to get avgRating > 4
                  list = list.filter(restaurant=>restaurant.data.avgRating>3)
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
              {
                /**
                 * USE MAP FUNCTION
                 *  <RestaurantCard resList= {resList[0]} />
                <RestaurantCard resList= {resList[1]} />
                <RestaurantCard resList= {resList[2]} />
                <RestaurantCard resList= {resList[3]} />
                 */

                list.map((restaurant) => <RestaurantCard key={restaurant?.data.id} resList={restaurant}/>)

              }  
               
                
            </div>
        </div>
        </>
    )
}

export default Body;