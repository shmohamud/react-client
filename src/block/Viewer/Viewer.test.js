import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import { GET_BLOCK } from "../../block/_queries_";
import { create, act } from "react-test-renderer";
import Viewer from "./index.jsx";

//Use last irreversible block for Viewer test 
const mocks = [
  {
    request: {
      query: GET_BLOCK(99097126)
    },
    result: {
      data: {
        getBlock: {
          id:
            "05e81a2620aa8f521e018c07419e58fc023f1e3b107f73b1757edbb475838f31",
          block_num: 99097126,
          producer: "eoshuobipool",
          confirmed: 0,
          previous:
            "05e81a2508587b344f230eaaf00f07db0d662a043ee25e406729ada3a00b29a9",
          timestamp: "2020-01-08T00:59:59.500",
          action_mroot:
            "6fda41a5ffaa0f330389ed005359ead143ebbb7d1fe4a1088d5eab9fdcce8abb",
          transaction_mroot:
            "5d86b4c840aa32e7857842cc5b0a5e7e974d83f4032166164efdcf953d8be24f",
          transactions: [
            {
              status: "executed",
              cpu_usage_us: 1083,
              net_usage_words: 14,
              trx: {
                id:
                  "58ef6c43ea72a7feb715ba211d3e73a37ee2fa6c320cf97a4416110be5af09bb"
              }
            },
            {
              status: "executed",
              cpu_usage_us: 15484,
              net_usage_words: 12,
              trx: {
                id:
                  "2784210a863d642934cd7830344b339d026a6da5ae00b656859c34ca91c1552c"
              }
            },
            {
              status: "executed",
              cpu_usage_us: 5430,
              net_usage_words: 233,
              trx: {
                id:
                  "90296a15f8a2a9b98b07cdd63cc0611f9b08facc6c958352f4d24ea45316277b"
              }
            },
            {
              status: "executed",
              cpu_usage_us: 480,
              net_usage_words: 18,
              trx: {
                id:
                  "86d5175edc44dbd9fb4f80a9239681e6b1012e9c270ed34f3098ead864f86813"
              }
            },
            {
              status: "executed",
              cpu_usage_us: 2643,
              net_usage_words: 128,
              trx: {
                id:
                  "6c2d7f0b884ef9c008053e60285f409139e586954bd8537f2dbe2d034120c887"
              }
            },
            {
              status: "executed",
              cpu_usage_us: 645,
              net_usage_words: 21,
              trx: {
                id:
                  "549545082c42dc45bd7ea0ca6fe1f7c79acebd21488529a336a92d2e653c35fb"
              }
            },
            {
              status: "executed",
              cpu_usage_us: 12157,
              net_usage_words: 455,
              trx: {
                id:
                  "131ee7dbdf4aa48d4ce43bb71e6a6791642af86d12a0b42933d355bda9c8f601"
              }
            },
            {
              status: "executed",
              cpu_usage_us: 5938,
              net_usage_words: 233,
              trx: {
                id:
                  "5f717340c3cc4aa7b2710303d32d81af7d4e6b99b8e3747d3e0cd0727105fc02"
              }
            },
            {
              status: "executed",
              cpu_usage_us: 5964,
              net_usage_words: 233,
              trx: {
                id:
                  "64ce497698af592cec5a5424cbea56e84bfeefdfab6e239efb992cb7a6cd1a11"
              }
            },
            {
              status: "executed",
              cpu_usage_us: 6069,
              net_usage_words: 233,
              trx: {
                id:
                  "9596e3d26faa13cbad98a4210ab993af299b676193614a9e3dfe936e6bcff769"
              }
            },
            {
              status: "executed",
              cpu_usage_us: 5832,
              net_usage_words: 233,
              trx: {
                id:
                  "a4ed36970584c7d8431141674b4602ddf225584b381ad2fdfae32d6a9cf06266"
              }
            },
            {
              status: "executed",
              cpu_usage_us: 5982,
              net_usage_words: 233,
              trx: {
                id:
                  "fde5caffed8d81965c75fcfb4d3b21b9571712b643c6c0a01b396a552a7a0fae"
              }
            },
            {
              status: "executed",
              cpu_usage_us: 5866,
              net_usage_words: 233,
              trx: {
                id:
                  "072175bb1aacc3e1f3e4230200eac68806cbc3a3b85685581c1b899bdb321b3a"
              }
            }
          ]
        }
      }
    }
  }
];

const component = create(
  <MockedProvider mocks={mocks}>
    <Viewer selectedBlockNum={99097126} />
  </MockedProvider>
);
const tree = component.toJSON();
expect(tree).toContain("Loading...");

it("renders without error", () => {
  act(() => {
    create(
      <MockedProvider mocks={mocks}>
        <Viewer selectedBlockNum={99097126} />
      </MockedProvider>
    );
  });
});
