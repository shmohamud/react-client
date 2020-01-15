import React from "react";
import Item from "../Item";

const List = ({transaction}) => {
  let key = 0;
  return (
    <div className={"transactions"}>
      <h3>Actions List</h3>
      <ul>
      {transaction.actions.map(a => 
   <Item key={(key += 1)} action={a}  />
      )}
      </ul>
    </div>
  );
};
export default List;
