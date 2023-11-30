import {useEffect, useState} from "react";

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);

    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    };


    useEffect(() => {
        updateTitle()
    }, [title]);

    return setTitle;
}
function UseTitle() {
    const titleUpdater = useTitle("Loading....");
    setTimeout(() => titleUpdater("HOME"), 5000);

    return (
        <div>

        </div>
    );
}
export default UseTitle;