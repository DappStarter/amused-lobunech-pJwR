require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift renew rural exchange hover climb sure gift'; 
let testAccounts = [
"0x41a35f48bb22e65215a773d3f37d599825393283fdaaee406d45b193e6d8072d",
"0x11fe801254e4c82fd90d32307bc4a50a65d5e91ed8eb3b5ce16f6f340ac14950",
"0xac8da6f2ecb70f03d9fc61b6dfdf48c5994437928abd56cf438b7feb59857f23",
"0x2f29eee4370c4510657148d8221f8343f410163c817172fd7d620913800bc240",
"0x9c27e82898de6af3a82069db232a41835c1f4b7ea95c27387004c62027b75b72",
"0x059a9945caa818ffa5f17b749e25f31cdb9abb0ffbcbfdfd18e4b306615ba5bb",
"0xf6a1a8ffda2ed7dc9e844ad2be63628235e05e5037b2c4faf49d4d3246214c33",
"0x914e987767bf8d183492b0cba248181bc1a2a2073a9f635385cea3c65dd23871",
"0x49b3fe4fa4be81ead346c3876962ce3261e40cdc7aafde67df539c7948875439",
"0x810f66acf8d4af4f962615ae34e5a36b516902a4ad9b6ee8afa0a0291bf3c3b4"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


