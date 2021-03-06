import React, { useState } from "react";
import Metadata from "../Metadata";
import List from "../../transaction/List";
import { useQuery } from "@apollo/react-hooks";
import { GET_BLOCK_METADATA } from "../_queries_";

const Viewer = ({ selectedBlockNum }) => {
  const { loading, error, data } = useQuery(
    GET_BLOCK_METADATA(selectedBlockNum)
  );

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <>
      <Metadata
        selectedBlockNum={selectedBlockNum}
        metadata={data.getBlock}
      />
      <List selectedBlockNum={selectedBlockNum} />
    </>
  );
};

export default Viewer;
