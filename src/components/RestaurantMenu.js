//Named import
import { useEffect } from "react";
const RestaurantMenu = () => {
    //Make API Call using useEffect hook. 
    // I will keep second argument as empty which leads to call this hook or function everytime my component renders.
    useEffect(() => {

    });

    return(
        <div className="menu">
            <h1>Name of restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Chicken</li>
            </ul>

        </div>
    )
}

export default RestaurantMenu;