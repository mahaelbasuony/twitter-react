import avatar from "../images/avatar.png";
import "./profilePhoto.css";
export const ProfilePhoto = () => {
  return (
    <div>
      <img
        src={avatar}
        alt="avatar"
        className="left-col__user-footer__avatar"
      />
    </div>
  );
};
