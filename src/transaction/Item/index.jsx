import React from "react";
import styles from './styles.css'

const Item = ({ transaction }) => {
  let rawData = JSON.stringify(transaction, undefined, 4)
  return (
    <div>
    <h3>Transaction receipt</h3>
    <pre>{rawData}</pre>
  </div>
  );
};

export default Item;
