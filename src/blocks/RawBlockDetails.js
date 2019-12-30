import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import BlockMetadata from "./BlockMetadata";
import TransactionList from "../transactions/TransactionList";

const RawBlockDetails = ({ selectedBlockNum }) => {
  const GET_BLOCK = gql`
    {
      getBlock(block_num: ${selectedBlockNum}) {
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
    }
  `;

  const { loading, error, data } = useQuery(GET_BLOCK);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  let {
    id,
    block_num,
    producer,
    confirmed,
    previous,
    timestamp,
    action_mroot,
    transaction_mroot
  } = data.getBlock;

  const metadata = {
    id,
    block_num,
    producer,
    confirmed,
    previous,
    timestamp,
    action_mroot,
    transaction_mroot
  };

  return (
    <>
      <BlockMetadata metadata={metadata} />
      <TransactionList
        transactions={data.getBlock.transactions}
        selectedBlockNum={selectedBlockNum}
      />
    </>
  );
};

export default RawBlockDetails;
