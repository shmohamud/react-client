import React from "react";
import styles from '../styles/Block.css';
import Transaction from "./Transaction";

const TransactionList = ({ transactions, selectedBlockNum }) => {
  return (
    <div className={"transactions"}>
      <h1>Transactions for Block Num: {selectedBlockNum} </h1>
      {transactions.map(t => (
        <Transaction key={t.trx.id} transaction={t} />
      ))}
    </div>
  );
};
export default TransactionList;
