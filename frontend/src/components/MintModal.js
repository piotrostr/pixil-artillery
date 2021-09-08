import { useEffect, useState } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { NFT_ABI, NFT_ADDRESS_ROPSTEN, NFT_ADDRESS_RINKEBY } from 'contract'
import ConnectWallet from 'components/ConnectWallet'
import Modal from 'react-modal'
import styled from 'styled-components'
import YouMinted from 'components/YouMinted'

const style = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: 698,
    height: 460,
    background: 'linear-gradient(0deg, rgba(87, 219, 171, 0.2), rgba(87, 219, 171, 0.2)), #C4C4C4',
    border: '5px solid #575757',
    boxSizing: 'border-box',
    boxShadow: '0px 8px 4px rgba(0, 0, 0, 0.25)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
};

const NumberLeft = styled.div`
  font-family: Orbitron;
  font-style: normal;
  font-weight: 900;
  font-size: 60px;
  line-height: 32px;
  color: #000000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const Info = styled.div`
  font-family: Orbitron;
  font-style: normal;
  font-size: 20px;
  line-height: 32px;
  color: #000000;
`

const Button = styled.div`
  width: 234px;
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

export default function MintModal({ isOpen, setOpen }) {
  const { active } = useWeb3React()
  const [minted, setMinted] = useState(null)
  function close() {
    setOpen(false)
    setMinted(null)
  }
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={close} 
      style={style}
    >
      {
        !active 
          ? <ConnectWallet />
          : (
            !minted
              ? <Mint setMinted={setMinted} />
              : <YouMinted id={minted} />
          )
      }
    </Modal>
  )
}

function Mint({ setMinted }) {
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
        NFT_ADDRESS_RINKEBY
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
        NFT_ADDRESS_RINKEBY
      )
      const ethAmount = library.utils.toWei('0.03', 'ether')
      const currentTokenId = await instance.methods.currentTokenId().call()
      const result = await instance.methods
        .mintTo(account)
        .send({ from: account, value: ethAmount })
      setWaiting(false)
      alert('Minted! Transaction hash: ' + result.transactionHash)
      setMinted(currentTokenId)
    } catch {
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
      <Button 
        onClick={active ? () => mint() : () => null} 
        disabled={!active && !waiting}
      >
        <a>
          { !waiting ? 'Mint for 0.015 eth' : 'Minting...' }
        </a>
      </Button>
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
