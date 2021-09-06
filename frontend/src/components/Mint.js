import { useEffect, useState } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Container, Button } from 'components/styled'

const injected = new InjectedConnector()  // TODO for main thing it can only be eth

export default function Mint() {
  const { account, active, activate, library } = useWeb3React()
  const [balance, setBalance] = useState(null)
  const address = account.slice(0, 4) + '...' + account.slice(account.length - 4)
  useEffect(async function() {
    const balance = await library.eth.getBalance(account)
    setBalance(library.utils.fromWei(balance))
  }, [])
  function mint() {
    return
  }
  return (
    <Container>
        <Button onClick={active ? () => mint() : () => null} disabled={!active}>
          <a>
            Mint
          </a>
        </Button>
      {
        balance && 
        <div>
          <div>Active: 🟢 </div>
          <div>Balance: {Number(balance).toFixed(2)}Ξ</div>
          <div>Address: {address}</div>
        </div>
      }
    </Container>
  )
}

