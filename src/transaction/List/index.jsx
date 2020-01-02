import React from "react";
import Item from "../Item";

const List = ({ transactions }) => {
  let key = 0;
  return (
    <div className={"transactions"}>
      <h3>Block Transactions</h3>
      {transactions.map(t => {
        return <Item key={(key += 1)} transaction={t} />;
      })}
    </div>
  );
};
export default List;
