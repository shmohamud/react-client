import React, { useState } from "react";
import Checkbox from "../../common/Checkbox";
import Item from "../Item";
import { useQuery } from "@apollo/react-hooks";
import { GET_BLOCK_TRANSACTIONS } from "../_queries_";
import {countActions} from './helpers'
import styles from './styles.css';

const List = ({ selectedBlockNum }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const isChecked = item =>
    checkedItems.filter(_i => _i.trx.id === item.trx.id).length !== 0;
    const handleCheck = t => {
      if (isChecked(t))
        return setCheckedItems(checkedItems.filter(_i => _i.trx.id !== t.trx.id));
      setCheckedItems(_items => [..._items, t]);
    };
  const { loading, error, data } = useQuery(
    GET_BLOCK_TRANSACTIONS(selectedBlockNum)
  );
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className={"transactions"}>
      <h1>Block Transactions</h1>
      <ul>
        {data.getBlock.transactions.map(t => {
          return t.trx? (
              <Item
                key={t.trx.id}
                handleCheck={()=>handleCheck(t)}
                transaction={t}
                isChecked={() => isChecked(t)}
                actionsCount={countActions(t.trx.transaction)}
              />
          ):(null);
        })}
      </ul>
    </div>
  );
};
export default List;
