import {useEffect, useState} from "react";

const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    });

    const onScroll = () => {
        console.log("x : " , window.scrollX," / y : ", window.scrollY);
        setState({x:window.scrollX, y:window.scrollY});
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    return state;
}

function UseScroll() {
    const { y } = useScroll();
    return (
        <div style={{height:"1000vh"}}>
            <h2 style={{position:"fixed", color: y>100 ? "beige" : "goldenrod"}}>Scroll Hi!</h2>
        </div>
    );
}
export default UseScroll;
