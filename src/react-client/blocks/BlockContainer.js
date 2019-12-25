import React, { useState } from "react";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "./styles/BlockContainer.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

//summary incl. hash(id), timestamp, and actions_count and corresponds to sidebar block items
const GET_LATEST_BLOCK = gql`
  {
    getChain {
      last_irreversible_block_id
      last_irreversible_block_num
      head_block_id
      head_block_producer
      virtual_block_cpu_limit
      virtual_block_net_limit
      block_cpu_limit
      server_version_string
      fork_db_head_block_id
      fork_db_head_block_num
    }
  }
`;

const BlockContainer = () => {
  //Hook for selecting block from sidebar, grabs block number from Block
  const [selectedBlock, selectBlock] = useState(0);
  const { loading, error, data } = useQuery(GET_LATEST_BLOCK);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className={"grid-container"}>
      <Header networkMetadata={data.getChain} />
      <Sidebar
        select={selectBlock}
        latestBlockNum={data.getChain.last_irreversible_block_num}
      />
      <Content
        selected={selectedBlock}
        latestBlockNum={data.getChain.last_irreversible_block_num}
      />
    </div>
  );
};

export default BlockContainer;
