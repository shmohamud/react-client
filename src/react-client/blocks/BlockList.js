import React from "react";
import Block from "./Block";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const BlockList = ({ latestBlockNum, select }) => {
  //Summary includes hash(id), timestamp, and actions count
  const GET_TEN_BLOCK_SUMMARIES = gql`{
  getBlocks(block_num:${latestBlockNum}, limit:10){
    id
    block_num 
    timestamp
    actions_count
    } 
  }`;

  const { loading, error, data } = useQuery(GET_TEN_BLOCK_SUMMARIES);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <ul>
      {data.getBlocks.map(summary => (
        <Block key={summary.block_num} summary={summary} select={select} />
      ))}
    </ul>
  );
};

export default BlockList;
