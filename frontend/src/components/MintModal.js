import { useEffect, useState } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import ConnectWallet from 'components/ConnectWallet'
import Modal from 'react-modal'
import styled from 'styled-components'
import YouMinted from 'components/YouMinted'
import Mint from 'components/Mint'

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

