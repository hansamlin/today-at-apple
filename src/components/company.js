import React from "react";
import styles from "./company.module.scss";
import todayAtApple from "../images/company/today-at-apple.png";
import hahow from "../images/company/hahow.png";
import Card from "./card/company";

const card = [
  {
    logo: <img className={styles.apple} src={todayAtApple} alt="" />,
    content:
      "Today at Apple 是由 Apple 精心設計的免費課程，天天都在 Apple 直營店精彩提供，也可參加線上系列課程。透過攝影、藝術與設計、影片、編碼、音樂和其他各種主題的實作活動來激發每個人的創造力。快來和 Apple 的培訓師以及在地的專業創意人一起運用 iPhone、iPad 和 Mac 實現更多可能，解鎖自己的創意潛能。",
    href: "http://apple.com/today",
    title: "Today at Apple",
  },
  {
    logo: <img className={styles.hahow} src={hahow} alt="" />,
    content:
      "Hahow 好學校是成立於 2015 年的新創教育科技公司，以知識技能分享為概念創立的線上課程平台，取名自台語的“學校“(ha̍k-hāu) ，透過全球首創「群募開課」機制，讓擁有一技之長的人透過教學分享賺取收入，打開多元有趣的學習想像，專注於挖掘知識與技能、創造知識有價、分享創作的新舞台，讓人一起樂於學那些學校不會教的事！",
    href:
      "https://hahow.in?utm_source=eventpage&utm_medium=apple&utm_campaign=taa2020&mts_s=eventpage&mts_m=apple&mts_c=taa2020&mts_t=brand",
    title: "Hahow",
  },
];

export default function Company() {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {card.map((e, i) => (
          <Card
            key={`company-card-${String(i)}`}
            logo={e.logo}
            content={e.content}
            href={e.href}
            title={e.title}
          />
        ))}
      </div>
    </div>
  );
}
