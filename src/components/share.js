import React from "react";
import copy from "../images/share/copy@3x.png";
import fb from "../images/share/facebook@3x.png";
import line from "../images/share/line@3x.png";
import styles from "./share.module.scss";

export default function Share() {
  return (
    <div className={styles.container}>
      <a href="#" title="Fb">
        <img src={fb} alt="" />
      </a>
      <a href="#" title="Line">
        <img src={line} alt="" />
      </a>
      <a href="#" title="copy">
        <img src={copy} alt="" />
      </a>
    </div>
  );
}
