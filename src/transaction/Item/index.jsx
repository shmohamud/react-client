import React from "react";
import Checkbox from "../../common/Checkbox";
import styles from "./styles.css";

const Item = ({ handleCheck, isChecked, transaction, actionsCount }) => {
  let rawData = JSON.stringify(transaction, undefined, 4);
  return isChecked(transaction) ? (
    <li>
      <Checkbox
        key={`xyz${transaction.trx.id}`}
        handleCheck={() => handleCheck(transaction)}
        transaction={transaction}
        isChecked={() => isChecked(transaction)}
        labelText={"Uncheck for Formatted"}

      />
      <pre>{rawData}</pre>
    </li>
  ) : (
    <li>
      <Checkbox
        key={`xyz${transaction.trx.id}`}
        handleCheck={() => handleCheck(transaction)}
        transaction={transaction}
        isChecked={() => isChecked(transaction)}
        labelText={"Check for Raw JSON"}
      />
      <h3>
        Transaction ID: {transaction.trx.id} Actions Count: {actionsCount}
      </h3>
    </li>
  );
};

export default Item;
