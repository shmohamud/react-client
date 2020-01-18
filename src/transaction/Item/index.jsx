import React from "react";
import styles from "./styles.css";

const Item = ({ transaction }) => {
  const countActions = (transaction) => {
      if (hasActions(transaction)) {
        return transaction.actions.length
      }
    return 0;
  };
  const hasActions = (transaction) => {
    if (transaction && transaction.hasOwnProperty("actions")) {
      return true;
    }
    return false;
  };
  let rawData = JSON.stringify(transaction, undefined, 4);
  return (
    <li>
      <span><h3>Transaction ID: {transaction.trx.id} Actions Count: {countActions(transaction.trx.transaction)}</h3></span>
    </li>
  );
};

export default Item;
