import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={styles.button} {...props} />
);
