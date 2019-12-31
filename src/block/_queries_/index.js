import { gql } from "apollo-boost";

export const GET_BLOCK = selectedBlockNum => gql`{
        getBlock(block_num:${selectedBlockNum}){
          id
          block_num
          producer
          confirmed
          previous
          timestamp
          action_mroot
          transaction_mroot
          transactions{
            status
            cpu_usage_us
            net_usage_words
            trx{
              id
              }
            }
         }
      }`;

export const GET_BLOCKS = latestBlockNum => gql`{
    getBlocks(block_num:${latestBlockNum}, limit:10){
      id
      block_num 
      timestamp
      actions_count
      } 
    }`;
