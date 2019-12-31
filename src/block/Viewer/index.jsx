import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_BLOCK } from "../_queries_";
import Metadata from "../Metadata";
import List from "../../transaction/List";

const Viewer = ({ selectedBlockNum }) => {
  const { loading, error, data } = useQuery(GET_BLOCK(selectedBlockNum));
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const metadata = data.getBlock;

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
