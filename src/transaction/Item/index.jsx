import React from "react";
import Checkbox from "../../common/Checkbox";
import styles from "./styles.css";

const Item = ({ handleCheck, isChecked, transaction }) => {
  const countActions = transaction => {
    if (hasActions(transaction)) {
      return transaction.actions.length;
    }
    return 0;
  };
  const hasActions = transaction => {
    if (transaction && transaction.hasOwnProperty("actions")) {
      return true;
    }
    return false;
  };
  let key = 0;
  let rawData = JSON.stringify(transaction, undefined, 4);
  return !isChecked(transaction) ? (
    <>
      <Checkbox
        key={(key += 1)}
        handleCheck={() => handleCheck(transaction)}
        transaction={transaction}
        isChecked={isChecked(transaction)}
        labelTextUnchecked={"Check for Raw JSON"}
        labelTextChecked={"Uncheck for Styled JSON"}
      />
      <li>
        <h3>
          Transaction ID: {transaction.trx.id} Actions Count:{" "}
          {countActions(transaction.trx.transaction)}
        </h3>
      </li>
    </>
  ) : (
    <>
      <Checkbox
        key={transaction.trx.id}
        handleCheck={() => handleCheck(transaction)}
        transaction={transaction}
        isChecked={isChecked(transaction)}
        labelTextUnchecked={"Check for Raw JSON"}
        labelTextChecked={"Uncheck for Styled JSON"}
      />
      <pre>{rawData}</pre>
    </>
  );
};

export default Item;
