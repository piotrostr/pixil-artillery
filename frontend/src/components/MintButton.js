import { useState, useEffect } from 'react'
import styled from 'styled-components'
import YouMinted from 'components/YouMinted'
import MintModal from 'components/MintModal'
import { useWeb3React } from '@web3-react/core'

const MintButtonContainer = styled.div`
  width: 143px;
  height: 47px;
  background: #19845D;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
`

export default function MintButton() {
  const { account, active, activate, library } = useWeb3React()
  const [disabled, setDisabled] = useState(false)

  function updateDisabled() {
    if (window.innerWidth < 600)
      setDisabled(true)
    else
      setDisabled(false)
  }

  useEffect(function() {
    updateDisabled()
    window.addEventListener('resize', updateDisabled)
  }, [])


  const [isOpen, setOpen] = useState(false)
  return (
    <div>
      <MintButtonContainer onClick={
        !disabled 
          ?  () => setOpen(true)
          :  () => alert('Use desktop to get minting!')
      }>
        Mint!
      </MintButtonContainer>
      <MintModal isOpen={isOpen} setOpen={setOpen} />
    </div>
  )
}
