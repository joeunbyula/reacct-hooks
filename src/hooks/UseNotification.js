import {useEffect} from "react";

const useNotification = (title, options) => {
    if(!("Notification" in window)) {
        return;
    }
    const fireNotif = () => {
        console.log(Notification.permission)
        if(Notification.permission !== "granted") {
            Notification.requestPermission().then(permission => {
                if(permission === "granted") {
                    new Notification(title, options);
                } else {
                    return;
                }
            })
        } else {
            console.log("notification")
            new Notification(title, options);
        }
    }

    return fireNotif;
}
function UseNotification() {
    const triggerNotif = useNotification("Can I steal toer kimchi",
        {body: "I Love Kimchi dont you"});
    return (
        <div>
            <button onClick={triggerNotif}>Notification Click me!</button>
        </div>
    );
}
export default UseNotification;
