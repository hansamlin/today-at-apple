import React from "react";
import styles from "./app.module.scss";
import Banner from "./banner";
import Classes from "./classes";
import Company from "./company";
import Introduction from "./introduction";
import LiveBroadcast from "./liveBroadcast";
import Notice from "./notice";
import Share from "./share";

export default function App() {
  return (
    <>
      <Banner />
      <Share />
      <Introduction />
      <LiveBroadcast />
      <Company />
      <Classes />
      <Notice />
    </>
  );
}
