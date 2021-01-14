import React from "react";
import styles from "./styles.css";
import { cleanTimestamp, truncateStr } from "../helpers";

const Item = ({ block, select }) => {
  return (
    <li onClick={() => select(block.block_num)}>
      <h3> Timestamp: <br/> {cleanTimestamp(block.timestamp)}</h3>
      <h4> Block ID: <br/> {truncateStr(block.id)} </h4>
      <h4>Actions Count: <br/> {block.actions_count}</h4>
    </li>
  );
};

export default Item;
