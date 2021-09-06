import Image from 'next/image'
import Head from 'next/head'
import styled from 'styled-components'
import ConnectWallet from 'components/ConnectWallet'
import Mint from 'components/Mint'
import { useWeb3React } from '@web3-react/core'

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

export default function Home() {
  const { account, active, activate, library } = useWeb3React()
  return (
    <Page>
      <Head>
        <title>Title</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        !active 
          ? <ConnectWallet />
          : <Mint />
      }
      <Footer>
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
      </Footer>
    </Page>
  )
}
