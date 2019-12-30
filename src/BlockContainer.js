import React, { useState } from "react";
import Content from "./blocks/Content";
import Header from "./blocks/Header";
import Sidebar from "./blocks/Sidebar";
import styles from "./styles/BlockContainer.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

//Get chain metadata
const GET_CHAIN_INFO = gql`
  {
    getChain {
      server_version
      server_version_string
      chain_id
      last_irreversible_block_id
      last_irreversible_block_num
      head_block_id
      head_block_num
      head_block_time
      head_block_producer
      fork_db_head_block_id
      fork_db_head_block_num
      block_cpu_limit
      block_net_limit
      virtual_block_cpu_limit
      virtual_block_net_limit
    }
  }
`;

const BlockContainer = () => {
  //Hook for selecting block from sidebar list
  const [selectedBlock, selectBlock] = useState(0);
  //Hook for refreshing block list via sidebar refresh btn
  const [refresh, refreshCount] = useState(0);
  const { loading, error, data } = useQuery(GET_CHAIN_INFO);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className={"grid-container"}>
      <Header chainMetadata={data.getChain} />
      <Sidebar
        select={selectBlock}
        latestBlockNum={data.getChain.last_irreversible_block_num}
        refresh={refreshCount}
      />
      <Content
        selected={selectedBlock}
        latestBlockNum={data.getChain.last_irreversible_block_num}
      />
    </div>
  );
};

export default BlockContainer;
