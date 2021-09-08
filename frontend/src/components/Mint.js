import { useEffect, useState } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { Container, Button } from 'components/styled'
import { NFT_ABI, NFT_ADDRESS_ROPSTEN, NFT_ADDRESS_RINKEBY } from 'contract'

export default function Mint({ minted, setMinted }) {
  const { account, active, library } = useWeb3React()
  const [balance, setBalance] = useState(null)
  const [remainingNfts, setRemainingNfts] = useState(null)
  const [waiting, setWaiting] = useState(false)
  const address = account.slice(0, 4) + '...' + account.slice(account.length - 4)

  useEffect(function() {
    (async function() {
      const balance = await library.eth.getBalance(account)
      setBalance(library.utils.fromWei(balance))
      const instance = new library.eth.Contract(
        NFT_ABI, 
        NFT_ADDRESS_RINKEBY
      )
      const totalSupply = await instance.methods.totalSupply().call()
      const currentTokenId = await instance.methods.currentTokenId().call()
      setRemainingNfts(totalSupply - currentTokenId)
    })()
  }, [waiting])

  async function mint() {
    try {
      setMinted(null)
      setWaiting(true)
      const instance = new library.eth.Contract(
        NFT_ABI, 
        NFT_ADDRESS_RINKEBY
      )
      const ethAmount = library.utils.toWei('0.03', 'ether')
      const result = await instance.methods
        .mintTo(account)
        .send({ from: account, value: ethAmount })
      setWaiting(false)
      alert('Minted! Transaction hash: ' + result.transactionHash)
      const currentTokenId = await instance.methods.currentTokenId().call()
      setMinted(currentTokenId)
    } catch {
      setWaiting(false)
      alert('Signing the transaction has failed.')
    }
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
          <div>Balance: {Number(balance).toFixed(3)}Ξ</div>
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

