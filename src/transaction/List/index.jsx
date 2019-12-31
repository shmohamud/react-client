import React from "react";
import Item from "../Item";

const List = ({ transactions, selectedBlockNum }) => {
  let key = 0;
  return (
    <div className={"transactions"}>
      <h1>Transactions for Block Num: {selectedBlockNum} </h1>
      {transactions.map(t => {
        return <Item key={(key += 1)} transaction={t} />;
      })}
    </div>
  );
};
export default List;
