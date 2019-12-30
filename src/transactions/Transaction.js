import React from "react";
import styles from '../styles/Block.css'

const Transaction = ({ transaction }) => {
  return (
    <ul className={'transactions'}>
      <li>Transaction Recipt ID: {transaction.trx.id}</li>
      <li>Status: {transaction.status}</li>
      <li>CPU Usage US: {transaction.cpu_usage_us}</li>
      <li>Net Usage Words: {transaction.net_usage_words}</li>
    </ul>
  );
};

export default Transaction;
