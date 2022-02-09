import "./follow.css";
import avatar from "../images/avatar.png";
export const Follow = () => {
  return (
    <div class="right-col__follow">
      <header class="follow__header">
        <h3 class="follow__header__title">Who to follow </h3>
      </header>
      <ul>
        <li class="follow__container">
          <a href="#" class="follow__container__user-card">
            <img
              src={avatar}
              alt="avatar"
              class="follow__container__user-avatar"
            />
            <div class="follow__container__username-info">
              <h3 class="follow__container__username">Karma</h3>
              <span class="follow__container__user-handel">@MahaElbasuony</span>
            </div>
          </a>
          <button class="follow__container__button">Follow</button>
        </li>
        <li class="follow__container">
          <a href="#" class="follow__container__user-card">
            <img
              src={avatar}
              alt="avatar"
              class="follow__container__user-avatar"
            />
            <div class="follow__container__username-info">
              <h3 class="follow__container__username">Medhat</h3>
              <span class="follow__container__user-handel">@Medhatdawoud</span>
            </div>
          </a>
          <button class="follow__container__button">Follow</button>
        </li>
        <li class="follow__container">
          <a href="#" class="follow__container__user-card">
            <img
              src={avatar}
              alt="avatar"
              class="follow__container__user-avatar"
            />
            <div class="follow__container__username-info">
              <h3 class="follow__container__username">Karma</h3>
              <span class="follow__container__user-handel">@KarmaDawoud</span>
            </div>
          </a>
          <button class="follow__container__button">Follow</button>
        </li>
      </ul>
      <footer class="follow__footer">
        <a href="#" class="follow__footer__show-more">
          Show more
        </a>
      </footer>
    </div>
  );
};
