import React from "react";
import PropTypes from "prop-types";
import styles from "./layout.module.scss";

export default function Link({ children }) {
  return <span className={styles.link}>{children}</span>;
}

Link.propTypes = { children: PropTypes.string.isRequired };
