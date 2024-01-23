import { useState } from "react";
import image from "../../images/lady_influencer.png";
import NewPage from "../NewPage";
import styles from "../Page1/page1.module.scss";
export default function Page1() {
  const [data, setdata] = useState("hello pnds!");
  const [displayData, setDisplayData] = useState({
    tit: "DisplayTitle",
    subtext: "This is subtext",
    heading: "This is a heading",
  });

  const handlepara = (data: any) => {
    setdata(data);
  };
  return (
    <div className={styles.mainWrapper}>
      <div>
        <p className={styles.big}>Today is a Big Day!!!</p>
        <NewPage
          title={"Home Page"}
          subText={"HomePage Subtext"}
          handleClick={handlepara}
          data={{ data }}
        />
        <NewPage title={"Home"} subText={"Subtext"} data={data} />
      </div>
      <div>
        <img src={image} alt="image" className={styles.heroimage} />
      </div>
    </div>
  );
}
