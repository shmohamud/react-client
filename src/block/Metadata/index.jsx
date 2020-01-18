import React from "react";
import {cleanTimestamp} from "../../block/helpers"
import Checkbox from '../../common/Checkbox'
import styles from './styles.css'

const Metadata = ({metadata}) => {
  const rawMetadata = JSON.stringify(metadata, undefined, 4);
  return (
    <div className={"content block-metadata"}>
      <Checkbox labelText={"Check for Raw JSON"}/>
      <div className={"content block-metadata"}>
      <h2>Block Metadata: </h2>
      <h3>Timestamp: {cleanTimestamp(metadata.timestamp)}</h3>
      <h3>Block ID: {metadata.id}</h3>
      <h3>Block Number: {metadata.block_num}</h3>
      <h3>Producer: {metadata.producer}</h3>
      <h3>Confirmed: {metadata.confirmed}</h3>
      <h3>Previous: {metadata.previous}</h3>
      <h3>Transactions Merkle Root: {metadata.transaction_mroot}</h3>
      <h3>Action Merkle Root: {metadata.action_mroot}</h3>
    </div>
    </div>
  );
};

export default Metadata;
