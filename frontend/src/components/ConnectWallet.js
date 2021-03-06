import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import styled from 'styled-components'

const Button = styled.div`
  width: 204px;
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

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const supportedChainIds = [ 4 ]
const injected = new InjectedConnector({ supportedChainIds: supportedChainIds })  

export default function ConnectWallet() {
  const { account, active, activate, chainId } = useWeb3React()
  const asdf = useWeb3React()
  console.log(asdf)
  return (
    <FlexCenter>
      <Button onClick={!active ? () => activate(injected) : () => null}>
        {
          active 
          ? (
            supportedChainIds.includes(chainId)
              ? <div>✅ {account}</div> 
              : <div>❌ Unsupported chain</div>
          )
          : 'Connect'}
      </Button>
    </FlexCenter>
  )
}

