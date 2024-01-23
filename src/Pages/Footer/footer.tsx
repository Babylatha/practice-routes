import styles from "../Footer/footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.foot1}>
        <div>
          <p className={styles.your}>©2023 Yourcompany</p>
        </div>
        <div>
          <p className={styles.land}>Landing</p>
        </div>
        <div>
          <p className={styles.button}>Purchase now</p>
        </div>
      </div>
      <hr className={styles.rule} />
      <div className={styles.foot2}>
        <div className={styles.home}>
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}
