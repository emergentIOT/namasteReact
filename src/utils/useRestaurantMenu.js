/**
 * Custom hook also called utility function, whose job is to return resInfo only.
 * Finalize the contract, 
 *  1. What will be the input 
 *  2. What will be the output
 */
import { useEffect, useState } from "react";
import { MENU_LIST } from "./constants";
const useRestaurantMenu = (resId) => {
    
    const[resInfo, setResInfo] = useState(null);
    // fetch data based on resId.
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const data = await fetch(MENU_LIST + resId);
        const json = await data.json();
        setResInfo(json);
    }
    return resInfo;
}

export default useRestaurantMenu;