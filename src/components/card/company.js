import React from "react";
import styles from "./company.module.scss";
import Link from "../link";
import Button from "../button";

export default function Card({ logo, content, href, title }) {
  return (
    <div className={styles.container}>
      <a href={href} title={title} className={styles.link}>
        {title}
      </a>
      <div className={styles.header}>
        {logo}
        <Link>了解更多</Link>
      </div>
      <div className={styles.content}>{content}</div>
      <Button className={styles.button} href={href} title={title}>
        了解更多
      </Button>
    </div>
  );
}
