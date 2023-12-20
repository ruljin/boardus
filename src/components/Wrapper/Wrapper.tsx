import type { PropsWithChildren } from "react";
import styles from "./Wrapper.module.css";

export const Wrapper = ({ children }: PropsWithChildren) => (
  <div className={styles.wrapper}>{children}</div>
);
