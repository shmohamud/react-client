import React from "react";
import styles from "./styles/Block.css";

const Block = ({ summary, select }) => {
  const cleanTimestamp = time => {
    const timestamp = new Date(time).toLocaleString();
    return timestamp;
  };

  const truncateStr = str => {
    if (str) {
      let truncated = str.substring(0, 20);
      truncated += "...";
      return truncated;
    }
    return "default";
  };

  return (
    <li onClick={() => select(summary.block_num)}>
      <h3> Timestamp: {cleanTimestamp(summary.timestamp)}</h3>
      <h4> Block ID: {truncateStr(summary.id)} </h4>
      <h4>Actions Count: {summary.actions_count}</h4>
    </li>
  );
};

export default Block;
