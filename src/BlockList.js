import React, {useState} from "react";
import Block from "./Block";
import blocksData from "./api";

function BlockList() {
  const[blocks, setBlocks] = useState(blocksData)
  return (
    <>
      {blocks.map(block => (
        <Block key={block.block_num} block={block} />
      ))}
    </>
  );
}

export default BlockList;
