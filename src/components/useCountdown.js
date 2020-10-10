import React, { useEffect, useState } from "react";
import styles from "./classes.module.scss";

const startingTime = "2020-11-02 12:00:00+0800";

function getCountdown(time) {
  const startDateTime = new Date(time).getTime();
  const nowDateTime = new Date().getTime();

  let offsetTime;
  if (nowDateTime > startDateTime) {
    offsetTime = (nowDateTime - startDateTime) / 1000;
  } else {
    offsetTime = (startDateTime - nowDateTime) / 1000;
  }

  const m = parseInt((offsetTime / 60) % 60, 10);
  const h = parseInt((offsetTime / 60 / 60) % 60, 10);
  const d = parseInt(offsetTime / 60 / 60 / 24, 10);

  return { d, h, m };
}

export default function useCountdown() {
  const { d, h, m } = getCountdown(startingTime);
  const [countdown, setCountdown] = useState({ d, h, m });

  const isTimeout = new Date(startingTime).getTime() <= new Date().getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      if (new Date().getSeconds() === 0) {
        setCountdown(getCountdown(startingTime));
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const Timer = (
    <div className={styles.countdown}>
      {isTimeout ? (
        <>
          已開課 <span>{countdown.d}</span> 天，快來加入吧
        </>
      ) : (
        <>
          開課倒數 <span>{countdown.d}</span> 天 <span>{countdown.h}</span> 時{" "}
          <span>{countdown.m}</span> 分
        </>
      )}
    </div>
  );

  return Object.assign({}, { component: Timer }, { isTimeout });
}
