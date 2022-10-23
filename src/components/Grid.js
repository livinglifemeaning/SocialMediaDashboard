import Toggle from "./Toggle";
import SocialMediaCard from "./SocialMediaCard";
import ActivityCard from "./ActivityCard";
import socialCardsData from "../assets/socialCardsData.json";
import activitiyCardsData from "../assets/acitivityCardsData.json";

import classes from "./Grid.module.css";

const Grid = () => {
  let totalFollowers = 0;
  socialCardsData.forEach((i) => (totalFollowers += i["follower-count"]));
  let totalFollowersText = totalFollowers.toString().split("")
  totalFollowersText.splice(2,0, ",")
  return (
    <div className={classes.grid}>
      <div className={classes.topTab}>
        <div className={classes.titleTab}>
          <h1 className={classes.topTitle}>Social Media Dashboard</h1>
          <p className={classes.totalFollows}>
            Total Followers: {totalFollowersText.join("")}
          </p>
        </div>
        <Toggle />
      </div>
      {socialCardsData.map((el) => {
        return (
          <SocialMediaCard
            mediaType={el["media-type"]}
            handle={el.handle}
            followerCount={el["displayed-follower-count"]}
            increase={el.increase}
            amountOfChange={el["amount-of-increase-decrease"]}
          />
        );
      })}
      <div className={classes.middleTab}>
        <h2>Overview - Today</h2>
      </div>
      {activitiyCardsData.map((el) => (
        <ActivityCard
          activityType={el["activity-type"]}
          mediaType={el["media-type"]}
          activityNumber={el["activity-number"]}
          percentageNumber={el["percentage-number"]}
          increase={el.increase}
        />
      ))}
    </div>
  );
};

export default Grid;
