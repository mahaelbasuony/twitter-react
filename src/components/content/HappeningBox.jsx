import { AddTweet } from "./AddTweet";
import "./happeningBox.css";
import { TweetOptions } from "./TweetOptions";
export const HappeningBox = () => {
  return (
    <div className="what-happening-box">
      <AddTweet />
      <TweetOptions />
    </div>
  );
};
