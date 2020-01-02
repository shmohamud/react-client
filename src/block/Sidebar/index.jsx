import React from "react";
import RefreshBtn from "../RefreshBtn";
import List from "../List";
import styles from "./styles.css";

const Sidebar = ({ latestBlockNum, select, refresh }) => {
  return (
    <div className="block-summary-element sidebar">
      <RefreshBtn refresh={refresh} />
      <h1>Recent Blocks</h1>
      <List select={select} latestBlockNum={latestBlockNum} />
    </div>
  );
};

export default Sidebar;
