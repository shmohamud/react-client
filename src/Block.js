
import React from "react";
import TrxList from "./TrxList";
import styles from "./Block.css";

const Block = ({ block }) => {
  const { transactions } = block;
  console.log("Transactions: ", transactions);
  return (
    <>
      <details>
        <summary>
          Hash (id): {block.id}Timestamp: {block.timestamp} Actions Count: 100
        </summary>
        {transactions.map(t => (
          <TrxList trx={t.trx} />
        ))}
      </details>
    </>
  );
};

export default Block;
