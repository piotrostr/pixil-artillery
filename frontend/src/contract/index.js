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
]

export const NFT_ADDRESS_ROPSTEN = '0xFd624C361d3b50D47988F32e7a05b68ba77A0a7c' 
export const NFT_ADDRESS_RINKEBY = '0xE78DaD000Bb93030985Be6531C0B8c2178916548'

