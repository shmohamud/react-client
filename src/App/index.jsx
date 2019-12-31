import React, { useState } from "react";
import Content from "../block/Content";
import Header from "../chain/Header";
import Sidebar from "../block/Sidebar";
import styles from "./styles.css";
import GET_CHAIN_INFO from "../chain/_queries_";
import { useQuery } from "@apollo/react-hooks";

const App = () => {
  //Hook for selecting block from sidebar list
  const [selectedBlock, selectBlock] = useState(0);
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_CHAIN_INFO,
    {
      notifyOnNetworkStatusChange: true
    }
  );

  if (networkStatus === 4) return 'Refreshing!';
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className={"grid-container"}>
      <Header chainMetadata={data.getChain} />
      <Sidebar
        select={selectBlock}
        latestBlockNum={data.getChain.last_irreversible_block_num}
        refresh={refetch}
      />
      <Content
        selected={selectedBlock}
        latestBlockNum={data.getChain.last_irreversible_block_num}
      />
    </div>
  );
};

export default App;
