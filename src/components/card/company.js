import React from "react";
import PropTypes from "prop-types";
import styles from "./card-company.module.scss";
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

Card.propTypes = {
  logo: PropTypes.element.isRequired,
  content: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
