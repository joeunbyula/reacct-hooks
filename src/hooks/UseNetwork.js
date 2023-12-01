import {useEffect, useState} from "react";

const useNetwork = onChange => {
    const [status, setStatus] = useState(navigator.onLine);

    const handlerChange = () => {
        if(typeof onChange === "function") {
            onChange(navigator.onLine);
        }
        setStatus(navigator.onLine)
    }
    useEffect(() => {
        window.addEventListener("online", handlerChange);
        window.addEventListener("offline", handlerChange);

        return () => {
            window.removeEventListener("online", handlerChange);
            window.removeEventListener("offline", handlerChange);
        }
    }, []);

    return status;
}
function UseNetwork() {
    const handleNetworkChange = online => {
        console.log(online ? "We just went online" : "We are Offline");
    }
    const status = useNetwork(handleNetworkChange);
    return (
        <div>
            <h2>network!!!!</h2>
            <p>{status ? "Online" : "Offline"}</p>
        </div>
    );
}
export default UseNetwork;
