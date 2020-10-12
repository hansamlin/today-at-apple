import React, { useEffect, useRef, useState } from "react";
import styles from "./introduction.module.scss";
import phone320 from "../images/introduction/phone_320.png";
import phone375 from "../images/introduction/phone_375.png";
import phone414 from "../images/introduction/phone_414.png";
import pad from "../images/introduction/pad.png";
import web from "../images/introduction/web.png";
import Title from "./image";

export default function Introduction() {
  const container = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const target = container.current;
    const obser = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && active === false) {
          setActive(true);
        }
      },
      { threshold: 0.5 }
    );
    obser.observe(target);

    return () => {
      obser.unobserve(target);
    };
  }, [active]);

  return (
    <div className={styles.container} ref={container}>
      <div className={styles.grid}>
        <h1 className={active ? styles.in : ""}>
          <Title
            phone320={phone320}
            phone375={phone375}
            phone414={phone414}
            pad={pad}
            web={web}
            alt="免費系列課程 為品牌注入嶄新可能"
          />
        </h1>
        <h2>
          從商品攝影、Logo
          設計到空間攝影，找到你的創作節奏，生產力和創意力一起雙重出擊！
        </h2>
        <h3>
          11 月 14 日到 12 月 5 日，加入 Today at Apple 與 Hahow
          好學校共同推出的免費線上課程，一起用 Apple
          裝置探索設計與影像的魅力，透過令人眼睛一亮的創造力為你的品牌注入嶄新可能。多位台灣創意界出色的專業人士將透過一系列品牌設計、商品和空間攝影，以及獨家限定的內容，與你分享各種精彩技巧，發掘打造好生意的好創意。立即報名參加。
        </h3>
      </div>
    </div>
  );
}
