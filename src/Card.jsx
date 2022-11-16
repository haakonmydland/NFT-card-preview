import styles from "./Card.module.css";
import IconEth from "./assets/icon-ethereum.jsx";
import IconClock from "./assets/icon-clock.jsx";
import IconView from "./assets/icon-view.jsx";

const Card = ({ image, title, href, text, price, time, creator }) => {
  return (
    <div className={`${styles.card}`}>
      <div className={`${styles.imageHover}`}>
        <img className={`${styles.image}`} src={image} />
        <div className={`${styles.imageHoverOverlay}`}>
          <IconView />
        </div>
      </div>
      <div className={`${styles.text}`}>
        <h1>
          <a href={href} target="__blank">
            {title}
          </a>
        </h1>
        <p>{text}</p>
      </div>
      <div className={`${styles.info}`}>
        <div className={`${styles.price}`}>
          <IconEth />
          {price} ETH
        </div>
        <div className={`${styles.time}`}>
          <IconClock />
          {time}
        </div>
      </div>
      <div className={`${styles.creator}`}>
        <img src={creator.img} />
        <span>
          Creation of{" "}
          <a href={creator.href} target="__blank">
            {creator.name}
          </a>
        </span>
      </div>
    </div>
  );
};
export default Card;
