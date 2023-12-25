import type { LabelHTMLAttributes } from "react";
import styles from "./Label.module.css";

export const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={styles.label} {...props} />
);
