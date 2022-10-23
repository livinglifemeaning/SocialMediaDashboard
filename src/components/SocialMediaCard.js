import Facebook from "../assets/icon-facebook.svg";
import Instagram from "../assets/icon-instagram.svg";
import Twitter from "../assets/icon-twitter.svg";
import YouTube from "../assets/icon-youtube.svg";
import IncreaseArrow from "../assets/icon-up.svg";
import DecreaseArrow from "../assets/icon-down.svg";
import classes from "./SocialMediaCard.module.css";

const SocialMediaCard = ({
  mediaType,
  handle,
  followerCount,
  increase,
  amountOfChange,
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
    <div
      className={`${classes.card} ${
        mediaType === "Twitter"
          ? classes.twitter
          : mediaType === "Facebook"
          ? classes.facebook
          : mediaType === "Instagram"
          ? classes.instagram
          : mediaType === "YouTube"
          ? classes.youtube
          : ""
      }`}
    >
      <div className={classes.handleBox}>
        <img
          src={image}
          alt={`${mediaType} icon`}
          className={classes.mediaIcon}
        />
        <p className={classes.handle}>{handle}</p>
      </div>
      <div className={classes.followerBox}>
        <p className={classes.followerNumber}>{followerCount}</p>
        <p className={classes.followerText}>
          {mediaType === "YouTube" ? "Subscribers" : "Followers"}
        </p>
      </div>
      <div className={`${classes.changeBox} ${increase ? classes.increase : classes.decrease}`}>
        <img
          src={increase ? IncreaseArrow : DecreaseArrow}
          alt={increase ? "Increase Arrow" : "Decrease Arrow"}
          className={classes.arrow}
        />
        <p className={classes.change}>{amountOfChange} Today</p>
      </div>
    </div>
  );
};

export default SocialMediaCard;
