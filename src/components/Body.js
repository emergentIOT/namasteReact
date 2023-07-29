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
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.2893144&lng=80.4604643&is-seo-homepage-enabled=true');
    const json = await data.json();
    console.log("apiData", json);
    setList(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants);
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