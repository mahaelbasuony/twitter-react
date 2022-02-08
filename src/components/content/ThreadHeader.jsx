import Icon from "../Icon";
import "./threadHeader.css";

export const ThreadHeader = () => {
  return (
    <div className="tweet-template__header">
      <div className="tweet-template__info">
        <div className="tweet-template__user">
          <h3 className="tweet-template__user__name">Medhat Dawoud</h3>
          <span className="tweet-template__user__handel"> @Med7atDawoud .</span>
        </div>
        <span className="tweet-template__time" title="10:30 PM.Aug 23, 2021">
          1h
        </span>
      </div>
      <a href="#" className="tweet-template__more-info-icon" title="more">
        <Icon name="moreInfo" color={"#6d7b85"} size={15} />
      </a>
    </div>
  );
};
