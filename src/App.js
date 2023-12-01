import './App.css';
import UseTabs from "./hooks/UseTabs";
import UseState from "./hooks/UseState";
import UseTitle from "./hooks/UseTitle";
import UseClick from "./hooks/UseClick";
import UseConfirm from "./hooks/UseConfirm";
import UsePreventLeave from "./hooks/UsePreventLeave";
import UseBeforeLeave from "./hooks/UseBeforeLeave";
import UseFadeIn from "./hooks/UseFadeIn";
import UseNetwork from "./hooks/UseNetwork";
import UseScroll from "./hooks/UseScroll";
import UseFullScreen from "./hooks/UseFullScreen";
import UseNotification from "./hooks/UseNotification";
import useAxios from "./hooks/UseAxios";

const App = () => {
    const {loading, error, data} = useAxios({url:"https://yts.am/api/v2/list_movies.json"}, )
    console.log(`Loading: ${loading} \n  error: ${error} \n data: ${JSON.stringify(data)}`)
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
