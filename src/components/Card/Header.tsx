import type { PropsWithChildren } from "react";
import styles from "./Card.module.css";

export const Header = ({ children }: PropsWithChildren) => (
  <header className={styles.card__header}>
    <h2 className={styles.card__heading}>{children}</h2>
  </header>
);
