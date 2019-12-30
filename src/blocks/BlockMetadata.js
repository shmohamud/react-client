import React from "react";

const BlockMetatdata = ({ metadata }) => {
  const cleanTimestamp = time => {
    const timestamp = new Date(time).toLocaleString();
    return timestamp;
  };
  return (
    <div className={"content block-metadata"}>
      <h1>Block Metadata: </h1>
      <h3>Timestamp: {cleanTimestamp(metadata.timestamp)}</h3>
      <h3>Block ID: {metadata.id}</h3>
      <h3>Block Number: {metadata.block_num}</h3>
      <h3>Producer: {metadata.producer}</h3>
      <h3>Confirmed: {metadata.confirmed}</h3>
      <h3>Previous: {metadata.previous}</h3>
      <h3>Transactions Merkle Root: {metadata.transaction_mroot}</h3>
      <h3>Action Merkle Root: {metadata.action_mroot}</h3>
    </div>
  );
};

export default BlockMetatdata;
