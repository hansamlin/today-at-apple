import React from "react";
import Image from "../image";
import styles from "./live.module.scss";

export default function Card({ src, h3, h4, date }) {
  return (
    <div className={styles.container}>
      <Image
        phone320={src.phone320}
        phone375={src.phone375}
        phone414={src.phone414}
        pad={src.pad}
        web={src.pad}
        alt={h3}
      />
      <h3 className={styles.h3}>{h3}</h3>
      <span className={styles.date}>{date}</span>
      <h4 className={styles.h4}>{h4}</h4>
    </div>
  );
}
