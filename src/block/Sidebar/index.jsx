import React from "react";
import LoadBtn from "../LoadBtn";
import List from "../List";
import styles from "./styles.css";

const Sidebar = ({ latestBlockNum, select, load }) => {
  return (
    <div className="block-summary-element sidebar">
      <LoadBtn load={load} select={select} />
      <h1>Recent Blocks</h1>
      <List select={select} latestBlockNum={latestBlockNum} />
    </div>
  );
};

export default Sidebar;
