import React, { useRef } from "react";
import copy from "../images/share/copy@3x.png";
import fb from "../images/share/facebook@3x.png";
import line from "../images/share/line@3x.png";
import styles from "./share.module.scss";

export default function Share() {
  const ref = useRef();

  const handleClick = (e) => {
    e.preventDefault();

    const copyText = document.createElement("input");
    copyText.style.position = "absolute";
    copyText.style.top = "-100px";
    copyText.value = window.location.href;

    ref.current.append(copyText);

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");

    copyText.remove();
  };

  return (
    <div className={styles.container} ref={ref}>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          window.location.href
        )}`}
        title="Fb"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={fb} alt="" />
      </a>
      <a
        href={`https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
          window.location.href
        )}`}
        title="Line"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={line} alt="" />
      </a>
      <a href="/" title="copy" onClick={handleClick}>
        <img src={copy} alt="" />
      </a>
    </div>
  );
}
