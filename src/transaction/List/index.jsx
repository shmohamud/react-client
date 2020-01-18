import React from "react";
import Item from "../Item";
import {useQuery} from '@apollo/react-hooks';
import Checkbox from '../../common/Checkbox';
import { GET_BLOCK_TRANSACTIONS } from '../_queries_';

const List = ({selectedBlockNum}) => {
  const { loading, error, data } = useQuery(GET_BLOCK_TRANSACTIONS(selectedBlockNum));
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  let key = 0;
  return (
    <div className={"transactions"}>
      <h1>Block Transactions</h1>
      <ul>
      {data.getBlock.transactions.map(t => {
        return (<span><Checkbox  key={key+=1}labelText={'Check for Raw JSON'}/><Item key={(key += 1)} transaction={t} /></span>);
      })}
      </ul>
    </div>
  );
};
export default List;
