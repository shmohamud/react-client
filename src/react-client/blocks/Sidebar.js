import React from "react";
import BlockList from "./BlockList";
import LoadBtn from "./RefreshBtn";
import styles from "./styles/Sidebar.css";

const Sidebar = ({ latestBlockNum, refresh, select }) => {
  return (
    <div className="block-summary-element sidebar">
      <LoadBtn refresh={refresh}/>
      <h1>Recent Blocks</h1>
      <BlockList select={select} latestBlockNum={latestBlockNum} />
    </div>
  );
};

export default Sidebar;
