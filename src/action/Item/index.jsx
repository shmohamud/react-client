import React from "react";

const Item = ({ action }) => {
  const key=0
  return (
    <li>
      <span><h3>Index: {999}</h3><h3>Smart Contract Name: {action.account}</h3><h3>Action Name: {action.name}</h3></span>
    </li>
  );
};

export default Item;
