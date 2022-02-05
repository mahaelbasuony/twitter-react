import { ProfilePhoto } from "./ProfilePhoto";
import "./footerCard.css";
export const FooterCard = () => {
  return (
    <a href="#" className="left-col__user-footer__card">
      <ProfilePhoto />
      <div className="left-col__user-footer__info">
        <h3 className="left-col__user-footer__name">Karma</h3>
        <span className="left-col__user-footer__handel">@MahaElbasuony</span>
      </div>
    </a>
  );
};
