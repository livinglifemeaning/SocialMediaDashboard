import Facebook from "../assets/icon-facebook.svg";
import Instagram from "../assets/icon-instagram.svg";
import Twitter from "../assets/icon-twitter.svg";
import YouTube from "../assets/icon-youtube.svg";
import IncreaseArrow from "../assets/icon-up.svg";
import DecreaseArrow from "../assets/icon-down.svg";
import classes from "./ActivityCard.module.css";

const ActivityCard = ({
  activityType,
  mediaType,
  activityNumber,
  percentageNumber,
  increase,
}) => {
  let image;
  if (mediaType === "Facebook") {
    image = Facebook;
  } else if (mediaType === "Twitter") {
    image = Twitter;
  } else if (mediaType === "Instagram") {
    image = Instagram;
  } else if (mediaType === "YouTube") {
    image = YouTube;
  }
  return (
    <div className={classes.card}>
      <div className={classes.top}>
        <p className={classes.activityType}>{activityType}</p>
        <img
          src={image}
          alt={`${mediaType} icon`}
          className={classes.mediaIcon}
        />
      </div>
      <div className={classes.bottom}>
        <p className={classes.activityNumber}>{activityNumber}</p>
        <div className={classes.percentageBox}>
          <img
            src={increase ? IncreaseArrow : DecreaseArrow}
            alt={increase ? "Increase Arrow" : "Decrease Arrow"}
            className={classes.arrow}
          />
          <p className={`${classes.percentage} ${increase ? classes.increase : classes.decrease}`}>{percentageNumber}%</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
