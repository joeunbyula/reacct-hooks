import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const  AppClass = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item+1);
    const decrementItem = () => setItem(item-1);
    return (
        <div className="App">
            <h1>Hello {item}</h1>
            <h2>Start editing to see some magic happen!</h2>
            <button onClick={incrementItem}>plus</button>
            <button onClick={decrementItem}>minus</button>
        </div>
    );
}

class AppUglyClass  extends React.Component {
    state = {
        item: 1
    }
    render() {
        const {item} = this.state;

        return (
            <div className="App">
                <h1>Hello Ugly {item}</h1>
                <h2>Start editing to see some magic happen!</h2>
                <button onClick={this.incrementItem}>plus</button>
                <button onClick={this.decrementItem}>minus</button>
            </div>
        );
    }

    incrementItem = () => {
        this.setState(state => {
            return {
                item:state.item+1
            }
        })
    }
    decrementItem = () => {
        this.setState(state => {
            return {
                item:state.item-``
            }
        })
    }
}

export default AppUglyClass;