import { useEffect, useState } from "react";

/**
 * Custom hook 
 * Always finalize the contract, 
 *  1. what will be input 
 *  2. what will be the output
 */
const useOnlineStatus = () => {

    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("online", () => {
            setOnlineStatus(true);
        });

        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });
    }, []);
    // boolean Value
    return onlineStatus;
}

export default useOnlineStatus;