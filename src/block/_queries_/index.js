import { gql } from "apollo-boost";

export const GET_BLOCKS = latestBlockNum => gql`{
  getBlocks(block_num:${latestBlockNum}, limit:10){
   id
   block_num 
   timestamp
   actions_count
 } 
}`
export const GET_BLOCK_METADATA = selectedBlockNum => gql`{
  getBlockMetadata(block_num:${selectedBlockNum}) {
    id
    block_num
    producer
    confirmed
    previous
    timestamp
    action_mroot
    transaction_mroot
    actions_count
  }
}`
