import React from "react";
import Item from "../Item";

const List = ({ transactions }) => {
  let key = 0;
  return (
    <div className={"transactions"}>
      <h3>Block Transactions</h3>
      <ul>
      {transactions.map(t => {
        return <Item key={(key += 1)} transaction={t} />;
      })}
      </ul>
    </div>
  );
};
export default List;
