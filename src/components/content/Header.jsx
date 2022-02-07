import Icon from "../Icon";
import "./header.css";
export const Header = () => {
  return (
    <div className="content__header">
      <h2 className="content__header__text">Home</h2>
      <span className="content__header_icon" title="Top Tweet">
        <Icon name={"top"} color={"#fff"} size={20} />
      </span>
    </div>
  );
};
