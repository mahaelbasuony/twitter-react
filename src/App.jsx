import "./App.css";
import { Content } from "./components/content/Content";

import { LeftSide } from "./components/left-side-componets/left-side";

function App() {
  return (
    <div class="page__inner">
      <LeftSide></LeftSide>
      <Content />
    </div>
  );
}

export default App;
