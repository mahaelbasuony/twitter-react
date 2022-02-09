import "./rightSide.css";
import { Header } from "./Header";
import { Trends } from "../content/Trends";

export const RightSide = () => {
  return (
    <div className="right-col">
      <Header />
      <Trends />
    </div>
  );
};
