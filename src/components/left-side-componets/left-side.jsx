import Navbar from "./navbar";
import "./left-side.css";
import { Footer } from "./Footer";

export function LeftSide() {
  return (
    <div className="left-side">
      <Navbar></Navbar>
      <Footer />
    </div>
  );
}
