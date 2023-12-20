import type { PropsWithChildren } from "react";
import styles from "./Card.module.css";

export const Body = ({ children }: PropsWithChildren) => (
  <div className={styles.card__body}>{children}</div>
);
