import React from "react";
import phone from "../images/banner/phone_320.png";
import pad from "../images/banner/pad.png";
import web from "../images/banner/web.png";
import styles from "./banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.container}>
      <picture>
        <source
          srcSet={pad}
          media="(min-width: 768px) and (max-width: 1199px)"
        />
        <source srcSet={phone} media="(max-width: 767px)" />
        <img src={web} alt="" className={styles.banner} />
      </picture>
    </div>
  );
}
