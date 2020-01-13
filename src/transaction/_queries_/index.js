import {gql} from 'apollo-boost'

export const GET_BLOCK_TRANSACTIONS = selectedBlockNum => gql`{
    getBlock(block_num: ${selectedBlockNum}) {
      id
      block_num
      producer
      confirmed
      previous
      timestamp
      action_mroot
      transaction_mroot
      transactions {
        status
        cpu_usage_us
        net_usage_words
        trx {
          id 
        }
      }
    }
  }`
  