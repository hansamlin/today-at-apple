import React from "react";
import styles from "./layout.module.scss";

export default function Link({ children }) {
  return <span className={styles.link}>{children}</span>;
}
