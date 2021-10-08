import { useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { NFT_ABI, NFT_ADDRESS_ETHER } from 'contract'
import styled from 'styled-components'

export const Info = styled.div`
  font-family: Orbitron;
  font-style: normal;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
`

const Button = styled.div`
  width: 254px;
  height: 76px;
  background: #CFF4FF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  font-family: Orbitron;
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 32px;
  color: #000000;
  border: 2px solid #1DBC03;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  user-select: none;
  cursor: pointer;
`

const NumberLeft = styled.div`
  font-family: Orbitron;
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 32px;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export default function Mint({ setMinted }) {
  const { account, active, library } = useWeb3React()
  const [balance, setBalance] = useState(null)
  const [tokenId, setTokenId] = useState(null)
  const [totalSupply, setTotalSupply] = useState(null)
  const [waiting, setWaiting] = useState(false)
  const [pixilsOwned, setPixilsOwned] = useState(false)
  const address = account.slice(0, 4) + '...' + account.slice(account.length - 4)

  useEffect(function() {
    (async function() {
      const balance = await library.eth.getBalance(account)
      setBalance(library.utils.fromWei(balance))
      const instance = new library.eth.Contract(
        NFT_ABI, 
        NFT_ADDRESS_ETHER
      )
      const _totalSupply = await instance.methods.totalSupply().call()
      const _currentTokenId = await instance.methods.currentTokenId().call()
      const _pixilsOwned = await instance.methods.balanceOf(account).call()
      setTotalSupply(_totalSupply)
      setTokenId(_currentTokenId)
      setPixilsOwned(_pixilsOwned)
    })()
  }, [waiting])

  async function mint() {
    try {
      setMinted(null)
      setWaiting(true)
      const instance = new library.eth.Contract(
        NFT_ABI, 
        NFT_ADDRESS_ETHER
      )
      const ethAmount = library.utils.toWei('0.03', 'ether')
      const result = await instance.methods
        .mintTo(account)
        .send({ from: account, value: ethAmount })
      console.log(result)
      setWaiting(false)
      const hash = result.transactionHash
      alert('Minted! Transaction hash: ' + hash)
      const receipt = await library.eth.getTransactionReceipt(hash)
      try {
        const topic = receipt.logs[0].topics[3]
        const mintedId = library.utils.toNumber(topic)
        setMinted(mintedId)
      } catch (e) {
        console.log(e)
        setMinted(await instance.methods.currentTokenId().call())
      }
    } catch (e) {
      console.log(e)
      setWaiting(false)
      alert('Signing the transaction has failed.')
    }
  }

  async function freeMint() {
    try {
      setMinted(null)
      setWaiting(true)
      const instance = new library.eth.Contract(
        NFT_ABI, 
        NFT_ADDRESS_ETHER
      )
      const result = await instance.methods
        .freeMint(account)
        .send({ from: account })
      console.log(result)
      setWaiting(false)
      const hash = result.transactionHash
      alert('Minted! Transaction hash: ' + hash)
      const receipt = await library.eth.getTransactionReceipt(hash)
      try {
        const topic = receipt.logs[0].topics[3]
        const mintedId = library.utils.toNumber(topic)
        setMinted(mintedId)
      } catch (e) {
        console.log(e)
        setMinted(await instance.methods.currentTokenId().call())
      }
    } catch (e) {
      console.log(e)
      setWaiting(false)
      alert('Signing the transaction has failed.')
    }
  }

  return (
    <>
      {
        totalSupply && tokenId &&
          <NumberLeft>{tokenId} / {totalSupply}</NumberLeft>
      }
      {
        <Button 
          onClick={active ? () => mint(): () => null} 
          disabled={!active && !waiting}
        >
          { 
            !waiting ? 'Mint for 0.03 ETH' : 'Minting...' 
          }
        </Button>
      }
      <div>
      {
        address &&
        <Info><b>Wallet Address: </b>{address}</Info>
      }
      {
        balance && 
        <Info><b>Balance: </b>{Number(balance).toFixed(3)} ETH</Info>
      }
      {
        pixilsOwned !== null && 
        <Info><b>Pixils owned: </b>{pixilsOwned}</Info>
      }
      </div>
    </>
  )
}
