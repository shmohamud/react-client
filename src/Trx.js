import React from "react";
import ContextFreeDataList from './ContextFreeDataList'

const Trx =  ({trx}) => { 
    
  console.log("TRX: ", trx)
  
  return (
 <>
   <details>
      <summary>
       compression: {trx.compression} 
       {trx.context_free_data.length? 
          <ContextFreeDataList data={trx.context_free_data}/> : <div> context_free_data: "" </div> } 
        {trx.packed_context_free_data? 
          <span> packed_context_free_data: {trx.context_free} </span> : <span> "" </span> }{trx.packed_trx? 
          <p> packed_trx: {trx.packed_trx} </p> : <span> packed_trx: "" </span> } 
       </summary>
    </details>
  </>
  )
}

export default Trx;
