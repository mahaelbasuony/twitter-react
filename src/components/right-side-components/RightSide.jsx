import "./rightSide.css";
import { Header } from "./Header";
import { Trends } from "../content/Trends";
import { Follow } from "../content/Follow";

export const RightSide = () => {
  return (
    <div className="right-col">
      <Header />
      <Trends />
      <Follow />
    </div>
  );
};
