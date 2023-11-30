import './App.css';
import UseTabs from "./hooks/UseTabs";
import UseState from "./hooks/UseState";
import UseTitle from "./hooks/UseTitle";
import UseClick from "./hooks/UseClick";
import UseConfirm from "./hooks/UseConfirm";
import UsePreventLeave from "./hooks/UsePreventLeave";
import UseBeforeLeave from "./hooks/UseBeforeLeave";

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
        <UseBeforeLeave/>
    </div>
  );
}

export default App;
