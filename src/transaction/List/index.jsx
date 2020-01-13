import React from "react";
import Item from "../Item";
import {useQuery} from '@apollo/react-hooks'
import { GET_BLOCK_TRANSACTIONS } from '../_queries_'

const List = ({selectedBlockNum}) => {
  const { loading, error, data } = useQuery(GET_BLOCK_TRANSACTIONS(selectedBlockNum));
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  let key = 0;
  return (
    <div className={"transactions"}>
      <h3>Block Transactions</h3>
      <ul>
      {data.getBlock.transactions.map(t => {
        return <Item key={(key += 1)} transaction={t} />;
      })}
      </ul>
    </div>
  );
};
export default List;
