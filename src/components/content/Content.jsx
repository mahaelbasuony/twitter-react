import "./content.css";
import { HappeningBox } from "./HappeningBox";
import { Header } from "./Header";
export const Content = () => {
  return (
    <div className="content">
      <Header />
      <HappeningBox />
    </div>
  );
};
