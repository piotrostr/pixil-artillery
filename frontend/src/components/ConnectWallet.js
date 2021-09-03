import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'

const injected = new InjectedConnector()  // TODO for main thing it can only be eth

export default function ConnectWallet() {
  const { account, active, activate, library } = useWeb3React()
  console.log(active, account)
  return (
    <button onClick={!active ? () => activate(injected) : () => null}>
      {active ? <div>✅ {account}</div> : 'Connect'}
    </button>
  )
}

