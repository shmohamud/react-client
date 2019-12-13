import React from "react";
import Trx from "./Trx";

function TrxList({trx}) {
  return (<Trx key={trx.id} trx={trx} />);
}

export default TrxList;
