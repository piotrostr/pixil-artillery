import { useEffect, useState } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Container, Button } from 'components/styled'

const injected = new InjectedConnector()  // TODO for main thing it can only be eth

const NFT_ABI = [
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

const NFT_ADDRESS = '0xFd624C361d3b50D47988F32e7a05b68ba77A0a7c'  // ropsten

export default function Mint() {
  const { account, active, activate, library } = useWeb3React()
  const [balance, setBalance] = useState(null)
  const [remainingNfts, setRemainingNfts] = useState(null)
  const [waiting, setWaiting] = useState(false)
  const address = account.slice(0, 4) + '...' + account.slice(account.length - 4)

  useEffect(async function() {
    const balance = await library.eth.getBalance(account)
    setBalance(library.utils.fromWei(balance))
    const instance = new library.eth.Contract(
      NFT_ABI, 
      NFT_ADDRESS
    )
    const totalSupply = await instance.methods.totalSupply().call()
    const currentTokenId = await instance.methods.currentTokenId().call()
    setRemainingNfts(totalSupply - currentTokenId)
  }, [])

  async function mint() {
    setWaiting(true)
    const instance = new library.eth.Contract(
      NFT_ABI, 
      NFT_ADDRESS
    )
    const ethAmount = library.utils.toWei('0.03', 'ether')
    const result = await instance.methods
      .mintTo(account)
      .send({ from: account, value: ethAmount })
    setWaiting(false)
    alert('Minted! Transaction hash: ' + result.transactionHash)
  }
  return (
    <Container>
        <Button onClick={active ? () => mint() : () => null} disabled={!active && !waiting}>
          <a>
            { !waiting ? 'Mint' : 'Minting...' }
          </a>
        </Button>
      {
        balance && 
        <div>
          <div>Active: 🟢 </div>
          <div>Balance: {Number(balance).toFixed(2)}Ξ</div>
          <div>Address: {address}</div>
          {
            remainingNfts &&
            <div>
              <br />
              <div>Remaining NFTs: {remainingNfts}</div>
            </div>
          }
        </div>
      }
    </Container>
  )
}

