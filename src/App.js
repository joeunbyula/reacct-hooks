import './App.css';
import UseTabs from "./hooks/UseTabs";
import UseState from "./hooks/UseState";
import UseTitle from "./hooks/UseTitle";
import UseClick from "./hooks/UseClick";

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
        <UseClick/>
    </div>
  );
}

export default App;
