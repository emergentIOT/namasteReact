//Named import
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_LIST } from "../utils/constants";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    const { resId } = useParams();
    console.log("resId", resId);
    //Make API Call using useEffect hook. 
    // I will keep second argument as empty which leads to call this hook or function everytime my component renders.
    // By adding empty dependency array it will only load once and thats what we want for this type of request.
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async() => {
        const data = await fetch(MENU_LIST + resId);
        const json = await data.json();
        console.log("Menu api call", json);
        setResInfo(json.data);
    }

    if(resInfo === null) {
        return <Shimmer />
    }
    
    //if(resInfo === null) return <Shimmer />;
    const { name, cuisines, cloudinaryImageId, costForTwoMessage } = resInfo?.cards[0].card.card.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards[1].card.card;
    console.log("Menu List", itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li>
                <li>{itemCards[2].card.info.name}</li> */}
                {itemCards.map(item => (
                <li key={item.card.info.name.id}>{item.card.info.name} - {'Rs' + item.card.info.price/10 || item.card.info.defaultPrice}</li>
                ))}
            </ul>

        </div>
    )
}

export default RestaurantMenu;