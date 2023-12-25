import type { SelectHTMLAttributes } from "react";
import styles from "./Select.module.css";

export const Select = (props: SelectHTMLAttributes<HTMLSelectElement>) => (
  <select className={styles.select} {...props} />
);
