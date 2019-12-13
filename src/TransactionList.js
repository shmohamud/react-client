import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transaction }) {
  return <Transaction transaction={transaction} />;
}

export default TransactionList;
