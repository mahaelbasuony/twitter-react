import Navbar from "./left-side-componets/navbar";
import "./left-side.css";
import Icon from "./Icon";

export function LeftSide() {
  return (
    <div className="left-side">
      {/* <Navbar></Navbar> */}
      <Icon name="account-group" color="#ffffff" size={30} />
    </div>
  );
}
