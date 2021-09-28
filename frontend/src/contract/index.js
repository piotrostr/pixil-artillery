export const NFT_ABI = [
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
    ],
    name: "mintTo",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "currentTokenId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "baseTokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
	"internalType":"address",
	"name":"owner",
	"type":"address"
      }
    ],
    "name":"balanceOf",
    "outputs": [
      {
	"internalType":"uint256",
	"name":"",
	"type":"uint256"
      }
    ],
    "stateMutability":"view",
    "type":"function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "freeMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
]

export const NFT_ADDRESS_ROPSTEN = '0xFd624C361d3b50D47988F32e7a05b68ba77A0a7c' 
export const NFT_ADDRESS_RINKEBY = '0xE78DaD000Bb93030985Be6531C0B8c2178916548'
export const NFT_ADDRESS_MATIC = '0x5D67a37A0127fB7Dc1Dd5d117277FE031066b2e8'
export const NFT_ADDRESS_ETHER = '0x868743daaf2cf5d3c5b90981232113c3a666fbba'

