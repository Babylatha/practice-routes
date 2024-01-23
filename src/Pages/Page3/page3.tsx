import { useState } from "react";
import image from "../../images/lady_influencer.png";
import NewPage from "../NewPage";
import styles from "./page3.module.scss";
export default function Page3() {
  const [paraText, setParaText] = useState("hello guyz!");
  const [displayData, setDisplayData] = useState({
    tit: "DisplayTitle",
    subtext: "This is subtext",
    heading: "This is a heading",
  });

  const handleClick = (data: any) => {
    setParaText(data);
  };

  return (
    <div className={styles.mainWrapper}>
      <div>
        <p className={styles.big}>{paraText}</p>
        <NewPage
          title={"Page3"}
          subText={"Page3 Subtext"}
          handleClick={handleClick}
          data={displayData}
        />
      </div>
      <img src={image} alt="image" className={styles.heroimage} />
    </div>
  );
}
