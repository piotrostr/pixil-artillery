import Image from 'next/image'
import Head from 'next/head'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { InjectedConnector } from '@web3-react/injected-connector'
import styled from 'styled-components'

const Page = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = styled.footer`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`

const injected = new InjectedConnector({ 
  supportedChainIds: [1, 3, 4, 5, 42] 
})

export default function Home() {
  const { account, active, activate, library } = useWeb3React()
  return (
    <Page>
      <Head>
        <title>Title</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button onClick={!active ? () => activate(injected) : () => null}>
        {active ? <div>✅ {account}</div> : 'Connect'}
      </button>

      <Footer>
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
      </Footer>
    </Page>
  )
}
