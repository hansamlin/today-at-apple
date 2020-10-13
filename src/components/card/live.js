import React from "react";
import PropTypes from "prop-types";
import Image from "../image";
import styles from "./card-live.module.scss";

export default function Card({ src, h3, h4, date }) {
  return (
    <a href="/" title={h3} className={styles.container}>
      <Image
        phone320={src.phone320}
        phone375={src.phone375}
        phone414={src.phone414}
        pad={src.pad}
        web={src.web}
        alt={h3}
      />
      <h3 className={styles.h3}>{h3}</h3>
      <span className={styles.date}>{date}</span>
      <h4 className={styles.h4}>{h4}</h4>
    </a>
  );
}

Card.propTypes = {
  src: PropTypes.object.isRequired,
  h3: PropTypes.string.isRequired,
  h4: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
