require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half problem forward tooth warrior ridge remove club hope knee surge gauge'; 
let testAccounts = [
"0x723f0466a5e7b02729a582fed200bae3b48ac017f0959ff1a3d94e25901aac4c",
"0x1e80ddce3a8604937d14137f85a47f31e5124b91d90c3fac383e2095300895a3",
"0xef9a640492082d732e69843cb4623b40686f33c43ea8d6c376f049d11d80be3a",
"0x8aaf513a97f1183e58bf28104269298243fae8143da1ff2b2c7ae2f01c9f3ce4",
"0xf77212b93d582be63be824226dd482dde77b39e958b25783555b2c7d65d3462f",
"0x1e9f6c3b6aed4caac15faf79265b7b1669ca14bd750da6e60ed34e18829c85b3",
"0x3b47db5ae00ab5e67c91fd1a082e6862915dc7999438c01573d1721cef449a24",
"0x2b77d7e8d7aa0e416292b2cbd80e205fbcaf96681a24ce7b86c76e05cbe7ed99",
"0xe4795c9c0c8751c4bf513bddae7811ba1f81fa2adf0dd44c45b2ca19ef424184",
"0x67a650210397c7ea86f742f5226d08ec158e71860d02f364634008cbe937d88c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

