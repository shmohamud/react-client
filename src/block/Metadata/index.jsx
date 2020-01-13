import React from "react";
import styles from './styles.css'

const Metadata = ({metadata}) => {
  const rawMetadata = JSON.stringify(metadata, undefined, 4);
  return (
    <div className={"content block-metadata"}>
      <button>Show Formatted</button>
      <h3>Block Metadata</h3>
      <pre>{rawMetadata}</pre>
    </div>
  );
};

export default Metadata;
