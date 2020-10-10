import React from "react";
import PropTypes from "prop-types";
import styles from "./classes.module.scss";

export default function Timer({ time: { d, h, m } }) {
  const startDateTime = new Date(time).getTime();
  const nowDateTime = new Date().getTime();
  
  return (
    <div className={styles.countdown}>
      開課倒數 <span>{d}</span> 天 <span>{h}</span> 時 <span>{m}</span> 分
    </div>
  );
}

Timer.propTypes = {
  time: PropTypes.object.isRequired,
};
