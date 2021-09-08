import { useState } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import ConnectWallet from 'components/ConnectWallet'
import Mint from 'components/Mint'
import { useWeb3React } from '@web3-react/core'
import { Page, Footer } from 'components/styled'
import Header from 'components/Header'
import YouMinted from 'components/YouMinted'

export default function MintNFT() {
  const { account, active, activate, library } = useWeb3React()
  const [minted, setMinted] = useState(null)
  return (
    <Page>
      <Head>
        <title>Pixil Artillery</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div style={{ marginBottom: 50 }}>
      </div>
      {
        !active 
          ? <ConnectWallet />
          : <Mint minted={minted} setMinted={setMinted} />
      }
      {
        minted &&
        <YouMinted id={minted} />
      }
    </Page>
  )
}

