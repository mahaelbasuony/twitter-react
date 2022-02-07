import Icon from "../Icon";
import "./tweetOptions.css";
export const TweetOptions = () => {
  return (
    <div className="tweet-box__options">
      <div className="tweet-box__options__container">
        <a href="#" class="tweet-box__options__icon" title="Media">
          <Icon
            name={"media"}
            color={"#1c9be9"}
            size={15}
            className="options__icon__styel"
          />
        </a>
        <a href="#" class="tweet-box__options__icon" title="GIF">
          <Icon
            name={"gif"}
            color={"#1c9be9"}
            size={15}
            className="options__icon__styel"
          />
        </a>
        <a href="#" class="tweet-box__options__icon" title="Poll">
          <Icon
            name={"poll"}
            color={"#1c9be9"}
            size={15}
            className="options__icon__styel"
          />
        </a>
        <a href="#" class="tweet-box__options__icon" title="Emoji">
          <Icon
            name={"emoji"}
            color={"#1c9be9"}
            size={15}
            className="options__icon__styel"
          />
        </a>
        <a href="#" class="tweet-box__options__icon" title="scheduale">
          <Icon
            name={"scheduale"}
            color={"#1c9be9"}
            size={15}
            className="options__icon__styel"
          />
        </a>
      </div>
      <button class="tweet-box__options-status" disabled>
        Tweet
      </button>
    </div>
  );
};
