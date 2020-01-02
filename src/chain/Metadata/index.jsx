import React from "react";
import styles from "./styles.css";

const Metadata = ({ metadata }) => {
  const rawMetadata = JSON.stringify(metadata, undefined, 4);
  return (
    <div className={"metadata"}>
      <h3>Chain Metadata</h3>
      <pre>{rawMetadata}</pre>
    </div>
  );
};

export default Metadata;
