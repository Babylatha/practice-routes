import image from "../../images/lady_influencer.png";
import styles from "./page4.module.scss";
export default function Page4() {
  return (
    <div className={styles.mainWrapper}>
      <div>
        <p className={styles.big}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, fugit
          possimus! Modi vero maxime animi totam, dolor magni ipsam esse
          possimus sunt minus voluptatem perspiciatis suscipit expedita tempore
          ipsa sed est quasi harum explicabo! Sit, quaerat commodi? Rem ex vero
          non quod ducimus aspernatur eveniet nostrum. Provident pariatur velit
          numquam voluptas et voluptatem officia illo necessitatibus, fugit
          nulla quam dicta repellendus maxime non in possimus natus itaque
          commodi delectus. Quisquam tempore deserunt dicta maxime sequi? Beatae
          repellat consectetur repellendus tempora magnam, ipsa saepe suscipit
          ducimus tenetur pariatur. Placeat esse debitis accusantium, ut
          voluptatem animi dignissimos incidunt ducimus dolores sunt tempora.
        </p>
      </div>
      <img src={image} alt="image" className={styles.heroimage} />
    </div>
  );
}
