import "./App.css";
import { Content } from "./components/content/Content";

import { LeftSide } from "./components/left-side-componets/left-side";
import { RightSide } from "./components/right-side-components/RightSide";

function App() {
  return (
    <div class="page__inner">
      <LeftSide></LeftSide>
      <Content />
      <RightSide />
    </div>
  );
}

export default App;
