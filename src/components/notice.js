import React from "react";
import styles from "./notice.module.scss";

export default function Notice() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>注意事項</div>
      <div className={styles.content}>
        1.報名直播課程將會帶您跳離 Hahow 網站並前往 Apple 網站進行直播課程報名頁面。
        <br />
        2. 活動時間請以 UTC+8 台灣標準時間為主。
        <br />
        3. Hahow好學校根據本條例收集、持有、處理、使用及/或轉移個人資料的責任。個人資料之搜集只限合法及相關用途，並會採取一切實際可行方法確保個人資料安全及準確無誤，避免個人資料在未經授權或意外的情況下被取用、刪除或作其他用途。
        <br />
        4.本活動由思哈股份有限公司舉辦，保留本活動變更、修改、終止之權力，若有變更將依Hahow好學校 Facebook 粉絲頁公告為準。
        <br />
        5.若有任何關於課程之疑問，請洽官網右下角客服視窗與我們聯繫。
      </div>
    </div>
  );
}
