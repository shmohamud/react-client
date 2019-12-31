import React, { useState } from "react";
import Header from "../chain/Header";
import Sidebar from "../block/Sidebar";
import Content from "../block/Content";
import { useQuery } from "@apollo/react-hooks";
import GET_CHAIN_INFO from "../chain/_queries_";
import styles from "./styles.css";

const App = () => {
  const [selectedBlock, selectBlock] = useState(0);
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_CHAIN_INFO,
    {
      notifyOnNetworkStatusChange: true
    }
  );

  if (networkStatus === 4) return 'R E F R E S H I N G !';
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
