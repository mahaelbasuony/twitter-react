import "./threadReplies.css";
import avatar from "../images/avatar.png";
import { Thread } from "./Thread";
export const ThreadReplies = () => {
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
        <Thread />
      </div>
      <div className=" tweet-template tweet-template--replies">
        <a href="#" className="tweet-template__user-card">
          <img
            src={avatar}
            alt="avatar"
            className="tweet-template__user-avatar"
          />
        </a>
        <Thread />
      </div>
      <div className=" tweet-template tweet-template--replies">
        <a href="#" className="tweet-template__user-card">
          <img
            src={avatar}
            alt="avatar"
            className="tweet-template__user-avatar"
          />
        </a>
        <Thread />
      </div>
      <div className=" tweet-template tweet-template--replies">
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
  );
};
