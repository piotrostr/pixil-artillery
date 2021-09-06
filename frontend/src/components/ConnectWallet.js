import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import styled from 'styled-components'
import { Container, Button } from 'components/styled'

const injected = new InjectedConnector()  

export default function ConnectWallet() {
  const { account, active, activate, library } = useWeb3React()
  console.log(active, account)
  return (
    <Button onClick={!active ? () => activate(injected) : () => null}>
      {active ? <div>✅ {account}</div> : 'Connect'}
    </Button>
  )
}

