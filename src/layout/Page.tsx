import type { PropsWithChildren } from "react";
import { Footer } from "./Footer";
import styles from "./Page.module.css";

export const Page = ({ children }: PropsWithChildren) => (
  <main className={styles.page}>
    <div className={styles.page__content}>{children}</div>
    <Footer />
  </main>
);
