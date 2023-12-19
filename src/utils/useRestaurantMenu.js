/**
 * Custom hook also called utility function, whose job is to return resInfo only.
 * Finalize the contract, 
 *  1. What will be the input 
 *  2. What will be the output
 */
import { useEffect, useState } from "react";
// import { MENU_LIST } from "./constants";

const useRestaurantMenu = (resId) => {
    
    const[resInfo, setResInfo] = useState(null);
    // fetch data based on resId.
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + resId);
        const json = await data.json();
        setResInfo(json);
    }
    return resInfo;
}

export default useRestaurantMenu;