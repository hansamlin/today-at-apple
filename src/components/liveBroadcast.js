import React, { useEffect, useRef, useState } from "react";
import styles from "./liveBroadcast.module.scss";
import phone320 from "../images/live-broadcast/phone_320.png";
import phone375 from "../images/live-broadcast/phone_375.png";
import phone414 from "../images/live-broadcast/phone_414.png";
import pad from "../images/live-broadcast/pad.png";
import web from "../images/live-broadcast/web.png";
import Title from "./image";
import phoneLimit from "../images/live-broadcast/phone-limit.png";
import padLimit from "../images/live-broadcast/pad-limit.png";
import webLimit from "../images/live-broadcast/web-limit.png";
import phoneAca from "../images/live-broadcast/phone-aca.png";
import padAca from "../images/live-broadcast/pad-aca.png";
import webAca from "../images/live-broadcast/web-aca.png";
import phoneSelflogo from "../images/live-broadcast/phone-selflogo.png";
import padSelflogo from "../images/live-broadcast/pad-selflogo.png";
import webSelflogo from "../images/live-broadcast/web-selflogo.png";
import phoneTogether from "../images/live-broadcast/phone-together.png";
import padTogether from "../images/live-broadcast/pad-together.png";
import webTogether from "../images/live-broadcast/web-together.png";
import Card from "./card/live";
import Button from "./button";

const card = [
  {
    src: {
      phone320: phoneLimit,
      phone375: phoneLimit,
      phone414: phoneLimit,
      pad: padLimit,
      web: webLimit,
    },
    h3: "獨家限定：和 Hahow 探索化創意為生意的創業心法",
    date: "11/14 14:00",
    h4:
      "Hahow 好學校執行長江前緯，將分享自己創立台灣線上學習領導品牌的心路歷程，從打破既有傳統學習模式，到內容創新設計，帶你探索多元的可能性，激盪品牌引領市場的無窮潛力。",
  },
  {
    src: {
      phone320: phoneAca,
      phone375: phoneAca,
      phone414: phoneAca,
      pad: padAca,
      web: webAca,
    },
    h3: "攝影研究室：和 Ada Lin 拍出小商品的大魅力",
    date: "11/21 14:00",
    h4:
      "讓專業攝影師 Ada 以創作案例和故事分享攝影基礎概念，實際透過燈光角度展現攝影構圖技巧和層次，只要有手機，也能拍出具有質感與魅力的「商品情境照」！",
  },
  {
    src: {
      phone320: phoneSelflogo,
      phone375: phoneSelflogo,
      phone414: phoneSelflogo,
      pad: padSelflogo,
      web: webSelflogo,
    },
    h3: "設計研究室：和馮宇創造自己的品牌 LOGO",
    date: "11/28 14:00",
    h4:
      "透過設計師馮宇的創作案例和故事介紹，一窺 LOGO 設計的心法與概念，從設計主題、關鍵字到視覺化圖騰，實際透過 ipad 展現 LOGO 的設計流程！",
  },
  {
    src: {
      phone320: phoneTogether,
      phone375: phoneTogether,
      phone414: phoneTogether,
      pad: padTogether,
      web: webTogether,
    },
    h3: "攝影研究室：與趙培均一起拍攝空間形象照",
    date: "12/05 14:00",
    h4:
      "瞭解專業攝影師 Paddy 的創作案例和風格，以空間形象基本概念，實際運用技巧實戰，找到適合的角度取景，手機也能拍出媲美專業的空間攝影！",
  },
];

export default function LiveBroadcast() {
  const [active, setActive] = useState(false);
  const h2 = useRef();

  useEffect(() => {
    let target = h2.current;
    const obser = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true && active === false) {
          setActive(true);
        }
      },
      { threshold: 0 }
    );
    obser.observe(target);

    return () => {
      obser.unobserve(target);
    };
  }, [active]);

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <h2 ref={h2} className={active ? styles.in : ""}>
          <Title
            phone320={phone320}
            phone375={phone375}
            phone414={phone414}
            pad={pad}
            web={web}
            alt="四場免費直播課程，與講師線上交流"
          />
        </h2>
        <div className={styles.cardContainer}>
          {card.map((e, i) => (
            <Card
              key={`live-card-${String(i)}`}
              src={e.src}
              h3={e.h3}
              h4={e.h4}
              date={e.date}
            />
          ))}
        </div>
        <div className={styles.clear} />
        <Button
          href="http://apple.com/today"
          className={styles.button}
          title="免費直播課程，立刻報名！"
        >
          免費直播課程，立刻報名！
        </Button>
      </div>
    </div>
  );
}
