import Icon from "../Icon";
import "./trends.css";

export const Trends = () => {
  return (
    <div class="right-col__trends">
      <header class="trends__header">
        <h3 class="trends__header__title">Trends for you </h3>
        <a href="#" class="trends__header__settings" title="settings">
          <Icon
            class="trends__container__more-info__icon"
            name={"settings"}
            color={"#fff"}
            size={20}
          />
        </a>
      </header>
      <ul>
        <li class="trends__container">
          <span class="trends__container__hashtag">Trending In Nederlands</span>
          <a href="#" class="trends__container__more-info" title="more">
            <Icon
              class="trends__container__more-info__icon"
              name={"more"}
              color={"#fff"}
              size={20}
            />
          </a>
          <h4 class="trends__container__title">Bergkamp</h4>
          <span class="trends__container__number-of-tweets">1,391 tweets</span>
        </li>
        <li class="trends__container">
          <span class="trends__container__hashtag">Trending In Nederlands</span>
          <a href="#" class="trends__container__more-info" title="more">
            <Icon
              class="trends__container__more-info__icon"
              name={"more"}
              color={"#fff"}
              size={20}
            />
          </a>
          <h4 class="trends__container__title">viruswaarheid</h4>
          <span class="trends__container__number-of-tweets">1,782 tweets</span>
        </li>
        <li class="trends__container">
          <span class="trends__container__hashtag">Trending In Nederlands</span>
          <a href="#" class="trends__container__more-info" title="more">
            <Icon
              class="trends__container__more-info__icon"
              name={"more"}
              color={"#fff"}
              size={20}
            />
          </a>
          <h4 class="trends__container__title">#kutrabobank</h4>
          <span class="trends__container__number-of-tweets">2,029 tweets</span>
        </li>
        <li class="trends__container">
          <span class="trends__container__hashtag">Policis . Trending</span>
          <a href="#" class="trends__container__more-info" title="more">
            <Icon
              class="trends__container__more-info__icon"
              name={"more"}
              color={"#fff"}
              size={20}
            />
          </a>
          <h4 class="trends__container__title">Kaag</h4>
          <span class="trends__container__number-of-tweets">19K tweets</span>
        </li>
        <li class="trends__container">
          <span class="trends__container__hashtag">Auto racing . Trending</span>
          <a href="#" class="trends__container__more-info" title="more">
            <Icon
              class="trends__container__more-info__icon"
              name={"more"}
              color={"#fff"}
              size={20}
            />
          </a>
          <h4 class="trends__container__title">#DutchGP</h4>
          <span class="trends__container__number-of-tweets"></span>
        </li>
      </ul>
      <footer class="trends__footer">
        <a href="#" class="trends__footer__show-more">
          Show more
        </a>
      </footer>
    </div>
  );
};
