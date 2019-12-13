Web Application to pull the most recent blocks from EOSIO 

● View page updates with the click of a “LOAD” button. Shows the 10 most recent blocks; older blocks  dropped from the list when you hit “LOAD” again.
● Block list shows the hash of the block (this is the id), its timestamp, and the count of actions included in that block.
● Clicking a block entry expands the line to show the raw contents of the block output.
● Displays the ricardian contract provided in the abi of the included block actions 

Resources
● eos-js: ​https://github.com/EOSIO/eosjs
● Main Chain Endpoint: Get full block content: https://api.eosnewyork.io/v1/chain/get_info
● Description of api endpoints: ​https://developers.eos.io/eosio-nodeos/reference