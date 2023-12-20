import styles from "./Page.module.css";

export const Footer = () => (
  <footer className={styles.page__footer}>
    <span
      className={`${styles["page__text--red"]} ${styles["page__text--push_right"]}`}
    >
      &#10084;
    </span>
    Made with love to boardgames by{" "}
    <a
      className={styles.page__link}
      href="https://github.com/ruljin"
      target="_blank"
      rel="noreferrer"
    >
      Ruljin
    </a>
    .
  </footer>
);
