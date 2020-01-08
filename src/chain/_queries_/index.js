import { gql } from "apollo-boost";

const GET_CHAIN_INFO = gql`
  {
    getChain {
      server_version
      server_version_string
      chain_id
      last_irreversible_block_id
      last_irreversible_block_num
      head_block_id
      head_block_num
      head_block_time
      head_block_producer
      fork_db_head_block_id
      fork_db_head_block_num
      block_cpu_limit
      block_net_limit
      virtual_block_cpu_limit
      virtual_block_net_limit
    }
  }
`;

export default GET_CHAIN_INFO;
