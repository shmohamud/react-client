import React from 'react'
import { MockedProvider } from '@apollo/react-testing';
import  GET_CHAIN_METADATA  from '../chain/_queries_/index.js';
import {create, act} from 'react-test-renderer';
import  App from './index.jsx';

const mocks = [
  {
    request: {
      query: GET_CHAIN_METADATA,
    },
    result: {
      data: {
        getChain: {
          chain_id: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
          last_irreversible_block_num: 99097126
        }
      },
    },
  },
];

it('renders without error', () => {
  create(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>,
  );
});