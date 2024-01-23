import image from "../../images/lady_influencer.png";
import NewPage from "../NewPage";
import styles from "./page2.module.scss";
export default function Page2() {
  return (
    <div className={styles.mainWrapper}>
      <div>
        <p className={styles.big}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum esse
          ipsam earum eum commodi. Optio provident, accusamus qui nihil
          dignissimos praesentium nisi asperiores unde, consequuntur nemo, nulla
          cum ipsa fuga?
        </p>
        <NewPage
          title={"Page2"}
          subText={"Page2 Subtext"}
          handleClick={() => {}}
          data={{}}
        />
      </div>
      <img src={image} alt="image" className={styles.heroimage} />
    </div>
  );
}
