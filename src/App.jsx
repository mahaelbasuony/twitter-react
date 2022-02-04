import "./App.css";
import Content from "./components/content";
import { LeftSide } from "./components/left-side-componets/left-side";
import { RightSide } from "./components/right-side";

function App() {
  return (
    <div class="page__inner">
      <LeftSide></LeftSide>
      <Content></Content>
      <RightSide></RightSide>
    </div>
  );
}

export default App;
