import type { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";
import styles from "./Card.module.css";

export const Card = ({ children }: PropsWithChildren) => (
  <section className={styles.card}>{children}</section>
);

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
