import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input className={styles.input} {...props} />
);
