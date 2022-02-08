import { ThreadHeader } from "./ThreadHeader";
import "./thread.css";
import avatar from "../images/avatar.png";
import { ThreadContent } from "./ThreadContent";
import { ThreadFooter } from "./ThreadFooter";
export const Thread = () => {
  return (
    <div className="thread">
      <div className="tweet-template">
        <a href="#" className="tweet-template__user-card">
          <img
            src={avatar}
            alt="avatar"
            className="tweet-template__user-avatar"
          />
        </a>
        <div className="tweet-template__container">
          <ThreadHeader />
          <ThreadContent />
          <ThreadFooter />
        </div>
      </div>
    </div>
  );
};
