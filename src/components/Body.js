import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mock_data";
const Body = () => {
    return (
        <>
        <div className="body">
            <div className="search">
                Search
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

                resList.map((restaurant) => <RestaurantCard key={restaurant.data.id} resList={restaurant}/>)

              }  
               
                
            </div>
        </div>
        </>
    )
}

export default Body;