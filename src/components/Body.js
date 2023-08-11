import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mock_data";
import { useState, useEffect } from "react";

/**
 * Super power variable or STATE variable
  REACT HOOK known as useState()
  React hook is basically normal JS function   || REACT SUPERPOWER OR UTILITY FUNC

  -- State variable
  1.1 const[list] = useState([]);
  1.2 const[list] = useState(null);
  1.3 const[list] = useState('aman');

  -- Normal JS variable
  1.1 let list = [];
  1.2 let list = null;
  1.3 let list = 'aman';

  */

const Body = () => {
//   const[list, setList] = useState([
//     {
//       data: {
//         "id": "531480",
//         "name": "Rollsking",
//         "avgRating": "3.3",
//         "cloudinaryImageId": "ts2jcaq0vadhut1ccoow"
//       }
//     },
//     {
//       data: {
//         "id": "53180",
//         "name": "Desi dhaba",
//         "avgRating": "2.0",
//         "cloudinaryImageId": "y9wnicph1o0ebmmsjsau"
//     }
//   }
// ]);
  
//const[list, setList] = useState(resList);
const[list, setList] = useState([]);


  let list2 = [
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

  //Will only render once the component got render
  useEffect(()=>{
    //fetch Data here. 
    fetchData();
  }, []);

 
  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667');
    const json = await data.json();
    console.log("apiData", json);
    /**
     * You have to make change only in line 79, in cards[i], where i is keep changing in the above api link, try from 0-11
     */
    setList(json.data.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  console.log("ResList", resList);

    return (
        <>
        <div className="body">
            <div className="filter">
              {/*Print high rating value only*/}
                <button 
                className="filter-btn"
                onClick={()=>{
                  //Write filter out to get avgRating > 4
                  const filterList = list.filter(restaurant=>restaurant.info.avgRating>3);
                  setList(filterList);
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

                list.map((restaurant) => <RestaurantCard key={restaurant.info.id} resList={restaurant}/>)

              }  
               
                
            </div>
        </div>
        </>
    )
}

export default Body;