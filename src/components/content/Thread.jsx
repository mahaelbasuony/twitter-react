import { ThreadHeader } from "./ThreadHeader";
import "./thread.css";

import { ThreadContent } from "./ThreadContent";
import { ThreadFooter } from "./ThreadFooter";
export const Thread = () => {
  return (
    <div className="tweet-template__container">
      <ThreadHeader />
      <ThreadContent />
      <ThreadFooter />
    </div>
  );
};
