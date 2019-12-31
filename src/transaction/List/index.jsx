import React from "react";
import Item from "../Item";

const List = ({ transactions, selectedBlockNum }) => {
  return (
    <div className={"transactions"}>
      <h1>Transactions for Block Num: {selectedBlockNum} </h1>
      {transactions.map(t => (
        <Item key={t.trx.id} transaction={t} />
      ))}
    </div>
  );
};
export default List;
