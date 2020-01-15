import React from "react";
import { RicardianContractFactory} from 'ricardian-template-toolkit';

const Item = ({singleTransaction, singleAbi}) => {
const factory = new RicardianContractFactory()
const config = {
  abi: singleAbi,
  transaction: singleTransaction,
  actionIndex: 0,
  maxPasses: 3,
  allowUnusedVariables: false
}
  return (
    <li>
      <h3>Actions</h3>
    </li>
  );
};

export default Item;
