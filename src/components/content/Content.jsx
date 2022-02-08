import "./content.css";
import { HappeningBox } from "./HappeningBox";
import { Header } from "./Header";
import { Thread } from "./Thread";
export const Content = () => {
  return (
    <div className="content">
      <Header />
      <HappeningBox />
      <Thread />
    </div>
  );
};
