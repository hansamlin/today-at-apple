import React from "react";
import styles from "./classes.module.scss";
import Title from "./image";
import phone320 from "../images/classes/phone320-classes-title.png";
import phone375 from "../images/classes/phone375-classes-title.png";
import phone414 from "../images/classes/phone414-classes-title.png";
import pad from "../images/classes/pad-classes-title.png";
import web from "../images/classes/web-classes-title.png";
// import Timer from "./timer";
import Button from "./button";
import adaPhone320 from "../images/classes/ada-phone-320.png";
import adaPhone375 from "../images/classes/ada-phone-375.png";
import adaPhone414 from "../images/classes/ada-phone-414.png";
import adaPad from "../images/classes/ada-pad.png";
import adaWeb from "../images/classes/ada-web.png";
import fonfyuPhone320 from "../images/classes/fonfyu-phone-320.png";
import fonfyuPhone375 from "../images/classes/fonfyu-phone-375.png";
import fonfyuPhone414 from "../images/classes/fonfyu-phone-414.png";
import fonfyuPad from "../images/classes/fonfyu-pad.png";
import fonfyuWeb from "../images/classes/fonfyu-web.png";
import paddyPhone320 from "../images/classes/paddy-phone-320.png";
import paddyPhone375 from "../images/classes/paddy-phone-375.png";
import paddyPhone414 from "../images/classes/paddy-phone-414.png";
import paddyPad from "../images/classes/paddy-pad.png";
import paddyWeb from "../images/classes/paddy-web.png";
import Card from "./card/classes";
import useCountdown from "./useCountdown";

const card = [
  {
    src: {
      phone320: adaPhone320,
      phone375: adaPhone375,
      phone414: adaPhone414,
      pad: adaPad,
      web: adaWeb,
    },
    title: "Today at Apple：和攝影師 Ada Lin 用 iPhone 學習專業商品攝影",
    lineText: "Ada",
    href:
      "https://hahow.in/courses/5f7c209762ad22756c7a1c74?utm_source=eventpage&utm_medium=apple&utm_campaign=taa2020&mts_s=eventpage&mts_m=apple&mts_c=taa2020&mts_t=brand",
    relatedHref:
      "https://hahow.in/@5a3e1500ea647c008cf13148?utm_source=eventpage&utm_medium=apple&utm_campaign=taa2020&mts_s=eventpage&mts_m=apple&mts_c=taa2020&mts_t=brand",
  },
  {
    src: {
      phone320: fonfyuPhone320,
      phone375: fonfyuPhone375,
      phone414: fonfyuPhone414,
      pad: fonfyuPad,
      web: fonfyuWeb,
    },
    title: "Today at Apple：和設計師馮宇拆解商業 LOGO 案例",
    lineText: "馮宇",
    href:
      "https://hahow.in/courses/5f7c210b1de7982fb413a3e9?utm_source=eventpage&utm_medium=apple&utm_campaign=taa2020&mts_s=eventpage&mts_m=apple&mts_c=taa2020&mts_t=brand",
    relatedHref:
      "https://hahow.in/courses?page=1&search=%E9%A6%AE%E5%AE%87+IF+OFFICE&utm_source=eventpage&utm_medium=apple&utm_campaign=taa2020&mts_s=eventpage&mts_m=apple&mts_c=taa2020&mts_t=brand",
  },
  {
    src: {
      phone320: paddyPhone320,
      phone375: paddyPhone375,
      phone414: paddyPhone414,
      pad: paddyPad,
      web: paddyWeb,
    },
    title: "Today at Apple：和攝影師 Paddy 用 iPhone 拍出商業空間形象照",
    lineText: "Paddy",
    href:
      "https://hahow.in/courses/5f7c212262ad2203e77a1cc9?utm_source=eventpage&utm_medium=apple&utm_campaign=taa2020&mts_s=eventpage&mts_m=apple&mts_c=taa2020&mts_t=brand",
    relatedHref:
      "https://hahow.in/@peichunchao?utm_source=eventpage&utm_medium=apple&utm_campaign=taa2020&mts_s=eventpage&mts_m=apple&mts_c=taa2020&mts_t=brand",
  },
];

export default function Classes() {
  const { component: Component, isTimeout } = useCountdown();
  
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
          {Component}
        </div>
        <div className={styles.cardContainer}>
          {card.map((e, i) => (
            <Card
              key={`classes-card-${String(i)}`}
              src={e.src}
              title={e.title}
              linkText={e.lineText}
              disabled={!isTimeout || i === 1}
              href={e.href}
              relatedHref={e.relatedHref}
            />
          ))}
        </div>

        {!isTimeout && (
          <Button
            className={styles.button}
            href="https://r.botbonnie.com/ndP-3"
            title="立即預約"
          >
            立即預約
          </Button>
        )}
      </div>
    </div>
  );
}
