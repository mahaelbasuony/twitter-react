import Icon from "../Icon";
import "./threadFooter.css";

export const ThreadFooter = () => {
  return (
    <div className="tweet-template__footer">
      <a
        href="#"
        className="tweet-template__footer__action tweet-template__footer__action--reply"
        title="Reply"
      >
        <span className="tweet-template__footer__action__container">
          <span className="tweet-template__icon">
            <Icon name={"comment"} color={"#8899a6"} size={15} />
          </span>
          <span className="tweet-template__footer__action__container__value">
            40
          </span>
        </span>
      </a>
      <a
        href="#"
        className="tweet-template__footer__action tweet-template__footer__action--retweet"
        title="Retweet"
      >
        <span className="tweet-template__footer__action__container">
          <span className="tweet-template__icon">
            <Icon name={"retweet"} color={"#8899a6"} size={15} />
          </span>
          <span className="tweet-template__footer__action__container__value">
            50
          </span>
        </span>
      </a>
      <a
        href="#"
        className="tweet-template__footer__action tweet-template__footer__action--like"
        title="Like"
      >
        <span className="tweet-template__footer__action__container">
          <span className="tweet-template__icon">
            <Icon name={"like"} color={"#8899a6"} size={15} />
          </span>
          <span className="tweet-template__footer__action__container__value">
            10
          </span>
        </span>
      </a>
      <a
        href="#"
        className="tweet-template__footer__action tweet-template__footer__action--share"
        title="Share"
      >
        <span className="tweet-template__footer__action__container">
          <span className="tweet-template__icon">
            <Icon name={"share"} color={"#8899a6"} size={15} />
          </span>
        </span>
      </a>
    </div>
  );
};
