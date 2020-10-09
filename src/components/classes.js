import React from "react";
import styles from "./classes.module.scss";
import Title from "./image";
import phone320 from "../images/classes/phone320-classes-title.png";
import phone375 from "../images/classes/phone375-classes-title.png";
import phone414 from "../images/classes/phone414-classes-title.png";
import pad from "../images/classes/pad-classes-title.png";
import web from "../images/classes/web-classes-title.png";
import Rest from "./rest";

export default function Classes() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.header}>
          <h2>
            <Title
              phone320={phone320}
              phone375={phone375}
              phone414={phone414}
              pad={pad}
              web={web}
              alt="三堂免費線上課程，掌握操作實務，創作並獲得靈感啟發"
            />
          </h2>
          <Rest />
        </div>
      </div>
    </div>
  );
}
