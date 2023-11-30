import {useEffect} from "react";

const useBeforeLeave = (onBefore) => {
    if(typeof onBefore !== "function") {
        return;
    }
    const handler = (event) => {
        const {clientY} = event;
        if(clientY <= 0) {
            onBefore();
        }
        //console.log("leaving");
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        document.addEventListener("mouseleave", handler);
        return () => document.removeEventListener("mouseleave", handler);
    }, []);
}

function UseBeforeLeave() {
    const begForLife = () => console.log("Pls dont leave");
    useBeforeLeave(begForLife);
    return (
        <div>

        </div>
    );
}
export default UseBeforeLeave;
