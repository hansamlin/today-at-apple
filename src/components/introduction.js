import React from "react";
import styles from "./introduction.module.scss";
import phone from "../images/title/title.png";
import pad from "../images/title/pad.png";
import web from '../images/title/web.png'

export default function Introduction() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <h1>
          <picture>
            <source
              srcSet={pad}
              media="(min-width: 768px) and (max-width: 1199px)"
            />
            <source
              srcSet={phone}
              media="(max-width: 767px)"
            />
            <img src={web} alt="免費系列課程 為品牌注入嶄新可能" />
          </picture>
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
