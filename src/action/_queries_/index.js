import { gql } from "apollo-boost";

export const GET_ACTION_ABI = retrievalAccount => gql`{
  getAbi(account:${retrievalAccount}) {
    structs {
      name
      base
      }
      actions {
        name
        type
        ricardian_contract
      }
    }
}`;
