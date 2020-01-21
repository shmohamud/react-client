import React from "react";
import Checkbox from "../../common/Checkbox";
import styles from "./styles.css";

const Metadata = ({ metadata, isChecked, handleCheck }) => {
  const {
    block_cpu_limit,
    fork_db_head_block_id,
    fork_db_head_block_num,
    head_block_id,
    head_block_producer,
    last_irreversible_block_id,
    last_irreversible_block_num,
    server_version_string,
    virtual_block_cpu_limit,
    virtual_block_net_limit
  } = metadata;
  const rawMetadata = JSON.stringify(metadata, undefined, 4);
  return isChecked ? (
    <div className={"raw-metadata"}>
      <Checkbox handleCheck={()=>handleCheck()}labelTextChecked={"Uncheck for Formatted"} isChecked={isChecked} />
      <h3>Raw Chain Metadata</h3>
      <pre>{rawMetadata}</pre>
    </div>
  ) : (
    <div className={"metadata"}>
      <Checkbox handleCheck={()=>handleCheck()} labelTextUnchecked={"Check for Raw JSON"} isChecked={isChecked} />
      <h3>Chain Metadata</h3>
      <ul>
        <li>Server Version: {server_version_string} </li>
        <li>Block CPU Limit: {block_cpu_limit} </li>
        <li>last_irreversible_block_id: {last_irreversible_block_id}</li>
        <li>Last Irreversible Block Num: {last_irreversible_block_num}</li>
        <li>Virtual Block CPU Limit: {virtual_block_cpu_limit}</li>
        <li>Virtual Block Net Limit: {virtual_block_net_limit}</li>
        <li>Fork db Head Block id: {fork_db_head_block_id}</li>
        <li>Fork db Head Block Num: {fork_db_head_block_num}</li>
        <li>Head Block id: {head_block_id} </li>
        <li>Head Block Producer: {head_block_producer}</li>
      </ul>
    </div>
  );
};

export default Metadata;
