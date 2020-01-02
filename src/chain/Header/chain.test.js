import { MockedProvider } from '@apollo/react-testing';
import { GET_CHAIN_INFO } from '../_queries_/';
import  Header from './index.jsx'

const mocks = [
  {
    request: {
      query: GET_CHAIN_INFO,
    },
    result: {
      data: {
        getChain: { server_version_string: "v1.8.4"},
      },
    },
  },
];

it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks}>
      <Header />
    </MockedProvider>,
  );
});