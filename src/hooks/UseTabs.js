import React, { useState } from "react";

const content = [
    {
        tab : "Sesciont 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab : "Sesciont 2",
        content: "I'm the content of the Section 2"
    }
]

const useTabs = (initialTab, allTabs) => {
    const [currenetIndex, setCurrentIndex] = useState(initialTab);

    if(!allTabs || !Array.isArray(allTabs)) {
        return ;
    }
    return {
        currentItem : allTabs[currenetIndex],
        changeItem : setCurrentIndex
    }
}
function UseTabs() {
    const {currentItem, changeItem} = useTabs(0, content);
    return (
        <div>
            { content.map((section,index) =>
                <button onClick={() => changeItem(index)}>{section.tab}</button>)}
            <div>{currentItem.content}</div>
        </div>
    );
}

export default UseTabs;