import React from "react";
import ActionList from "../../action/List";
import styles from "./styles.css";

const Item = ({ transaction }) => {
  const hasActions = t => {
    if (t.trx.transaction) {
      return true;
    }
    return false;
  };
  let rawData = JSON.stringify(transaction, undefined, 4);
  return (
    <li>
      <h3>Raw Transaction</h3>
      {hasActions(transaction) ? (
          <>
            <pre>{rawData}</pre>
            <ActionList key={999} transaction={transaction.trx.transaction} />
          </>
      ) : (
        <>
          <pre>{rawData}</pre>
          <h1>NO ACTIONS TO SHARE</h1>
        </>
      )}
    </li>
  );
};

export default Item;
