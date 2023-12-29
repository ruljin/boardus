import type { HTMLAttributes } from "react";
import styles from "./Paragraph.module.css";

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  textAlign?: "center";
}

export const Paragraph = ({ textAlign, ...rest }: ParagraphProps) => (
  <p
    className={`${styles.paragraph} ${
      textAlign ?? styles["paragraph--center"]
    }`}
    {...rest}
  />
);
