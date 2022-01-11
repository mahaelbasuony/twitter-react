import "./App.css";
import Content from "./components/content";
import LeftSide from "./components/left-side";
import RightSide from "./components/right-side";

function App() {
  return (
    <div className="App">
      <LeftSide></LeftSide>
      <Content></Content>
      <RightSide></RightSide>
    </div>
  );
}

export default App;
