import React from "react";
import Block from "../Item";
import { GET_BLOCKS } from "../_queries_";
import { useQuery } from "@apollo/react-hooks";

const List = ({ latestBlockNum, select }) => {
  const { loading, error, data } = useQuery(GET_BLOCKS(latestBlockNum));
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <ul>
      {data.getBlocks.map(block => (
        <Block key={block.block_num} block={block} select={select} />
      ))}
    </ul>
  );
};

export default List;
