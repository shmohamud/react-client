import React, { useState } from "react";
import { cleanTimestamp } from "../../block/helpers";
import Checkbox from "../../common/Checkbox";

const Metadata = ({ metadata }) => {
  const [isChecked, setChecked] = useState(false);
  const handleCheck = () => {
    setChecked(isChecked => !isChecked);
  };
  const rawMetadata = JSON.stringify(metadata, undefined, 4);
  return isChecked ? (
    <div className={"content block-metadata"}>
      <Checkbox
        handleCheck={handleCheck}
        isChecked={isChecked}
        labelText={"Uncheck for Formatted"}
        key={"0982903180278979"}
      />
      <pre>{rawMetadata}</pre>
    </div>
  ) : (
    <div className={"content block-metadata"}>
      <Checkbox
        handleCheck={handleCheck}
        isChecked={isChecked}
        labelText={"Check for Raw JSON"}
        key={"0982903180278979"}
      />
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
  );
};

export default Metadata;
