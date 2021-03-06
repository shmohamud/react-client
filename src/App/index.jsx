import React, { useState } from "react";
import Header from '../common/Header';
import Sidebar from '../block/Sidebar';
import Content from '../block/Content';
import { useQuery } from "@apollo/react-hooks";
import GET_CHAIN_METADATA from "../chain/_queries_";
import { load } from "./helpers";
import styles from "./styles.css";

const App = () => {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_CHAIN_METADATA,
    {
      notifyOnNetworkStatusChange: true
    }
  );
  const [selectedBlock, selectBlock] = useState(0);
  if (networkStatus === 4)
    return                         `R 
                                      E 
                                        F
                                          R 
                                            E
                                              S
                                                H
                                                  I
                                                    N
                                                      G !`;
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  
  return (
    <div className={"grid-container"}>
      <Header chainMetadata={data.getChainMetadata}/>
      <Sidebar
        latestBlockNum={data.getChainMetadata.last_irreversible_block_num}
        load={() => load(selectBlock, refetch)}
        select={selectBlock}
      />
      <Content
        latestBlockNum={data.getChainMetadata.last_irreversible_block_num}
        selected={selectedBlock}
      />
    </div>
  );
};

export default App;
