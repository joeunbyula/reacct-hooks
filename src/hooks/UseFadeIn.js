import {useEffect, useRef} from "react";

const useFadeIn = (duration=1, delay =0) => {
    if(typeof duration !== "number") {
        return ;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const element = useRef();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if(element.current) {
            const { current } = element;
            current.style.transition=`opacity ${duration}s`
            current.style.opacity =1;
        }
    }, []);
    return {ref : element, style : {opacity:0}};
}

function UseFadeIn() {
    const fadeInH2 = useFadeIn(1,2);
    const fadeInP = useFadeIn(5,10);
    return (
        <div>
            <h2 {...fadeInH2}>Fade In</h2>
            <p {...fadeInP}>lorem ipsum lalalala</p>
        </div>
    );
}
export default UseFadeIn;
