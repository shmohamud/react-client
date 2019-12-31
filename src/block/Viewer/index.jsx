import React from "react";
import { GET_BLOCK } from "../_queries_";
import { useQuery } from "@apollo/react-hooks";
import Metadata from "../Metadata";
import List from "../../transaction/List";

const Viewer = ({ selectedBlockNum }) => {
  const { loading, error, data } = useQuery(GET_BLOCK(selectedBlockNum));
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  let {
    id,
    block_num,
    producer,
    confirmed,
    previous,
    timestamp,
    action_mroot,
    transaction_mroot
  } = data.getBlock;

  const metadata = {
    id,
    block_num,
    producer,
    confirmed,
    previous,
    timestamp,
    action_mroot,
    transaction_mroot
  };

  return (
    <>
      <Metadata metadata={metadata} />
      <List
        transactions={data.getBlock.transactions}
        selectedBlockNum={selectedBlockNum}
      />
    </>
  );
};

export default Viewer;
