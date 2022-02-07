import "./addTweet.css";
import avatar from "../images/avatar.png";
export const AddTweet = () => {
  return (
    <div className="tweet-box">
      <a href="#" className="tweet-box__user-card">
        <img src={avatar} alt="avatar" className="tweet-box__user-avatar" />
      </a>
      <div class="tweet-box__container">
        <textarea
          name="tweet"
          className="tweet-box__field"
          cols="40"
          rows="1"
          placeholder="What's happening?"
          required
        ></textarea>
        <div className="tweet-box__privacy">
          <a href="#" className="tweet-box__privacy-message">
            Everyone can reply
          </a>
        </div>
      </div>
    </div>
  );
};
