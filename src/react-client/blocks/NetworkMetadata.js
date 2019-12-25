import React from "react";
import styles from "./styles/NetworkMetadata.css";
const NetworkMetadata = ({ metadata }) => {
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
  return (
    <div className={"metadata"}>
      <h3>Network Metadata</h3>
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

export default NetworkMetadata;
