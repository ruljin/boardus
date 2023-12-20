import type { PropsWithChildren } from "react";
import styles from "./Card.module.css";

export const Footer = ({ children }: PropsWithChildren) => (
  <footer className={styles.card__footer}>{children}</footer>
);
