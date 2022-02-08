import "./content.css";
import { HappeningBox } from "./HappeningBox";
import { Header } from "./Header";
import { Thread } from "./Thread";
import { ThreadReplies } from "./ThreadReplies";
import avatar from "../images/avatar.png";
export const Content = () => {
  return (
    <div className="content">
      <Header />
      <HappeningBox />

      <div className="thread">
        <div className="tweet-template">
          <a href="#" className="tweet-template__user-card">
            <img
              src={avatar}
              alt="avatar"
              className="tweet-template__user-avatar"
            />
          </a>
          <Thread />
        </div>
      </div>

      <ThreadReplies />
    </div>
  );
};
