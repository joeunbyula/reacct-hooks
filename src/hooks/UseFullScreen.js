import {useRef} from "react";
import useFadeIn from "./UseFadeIn";
import {elementType} from "prop-types";

const useFullScreen = (callback) => {
    const element = useRef();
    const triggerFull = () => {

        console.log("full screen start");
        if (!document.fullscreenElement && element.current)  {
            console.log("fullscreenElement");
            element.current.requestFullscreen().catch((err) => {
                console.log(
                    `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
                );
            });
            if(callback && typeof callback === "function") {
                callback(true);
            }
        }
    }

    const exitFullscreen = () => {
        if (document.fullscreenElement &&  element.current) {
            document.exitFullscreen();
            callback(false);
        }
    }

    return { element, triggerFull, exitFullscreen};
}



function UseFullScreen() {
    const onFullS = (isFull) => {
        console.log(isFull ? "We are full" : "We are small");
    }
    const {element, triggerFull, exitFullscreen} = useFullScreen(onFullS);
    return (
        <div>
            <div ref={element}>
                <img src="https://i.ibb.co/R6RwNxx/grape.jpg" alt="grape"/>
                <button onClick={exitFullscreen}>Exit fullscreen</button>
            </div>
            <button onClick={triggerFull}>Make fullscreen</button>

        </div>
    );
}
export default UseFullScreen;
