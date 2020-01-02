import React from "react";
import styles from "./styles.css";

const Item = ({ transaction }) => {
  let rawData = JSON.stringify(transaction, undefined, 4);
  return (
    <li>
      <h3>Transaction receipt</h3>
      <pre>{rawData}</pre>
    </li>
  );
};

export default Item;
