import React from "react";
import styles from "./styles.css";

const Item = ({ block, select }) => {
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
    <li onClick={() => select(block.block_num)}>
      <h3> Timestamp: {cleanTimestamp(block.timestamp)}</h3>
      <h4> Block ID: {truncateStr(block.id)} </h4>
      <h4>Actions Count: {block.actions_count}</h4>
    </li>
  );
};

export default Item;
