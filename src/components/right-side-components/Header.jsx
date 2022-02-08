import "./header.css";
import Icon from "../Icon";
export const Header = () => {
  return (
    <div className="right-col__header">
      <input
        type="text"
        placeholder="Search Twitter"
        name="search"
        className="right-col__header__search-field"
      />
      <span class="right-col__header__search-icon">
        <Icon name={"search"} color={"#fff"} size={20} />
      </span>
    </div>
  );
};
