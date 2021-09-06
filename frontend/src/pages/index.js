import Image from 'next/image'
import Head from 'next/head'
import ConnectWallet from 'components/ConnectWallet'
import Mint from 'components/Mint'
import { useWeb3React } from '@web3-react/core'
import { Page, Footer } from 'components/styled'

export default function Home() {
  const { account, active, activate, library } = useWeb3React()
  return (
    <Page>
      <Head>
        <title>Pixil Artillery</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ marginBottom: 50 }}>
        <Image 
          src={'/logo.jpeg'}
          width={273}
          height={223}
        />
      </div>
      {
        !active 
          ? <ConnectWallet />
          : <Mint />
      }
    </Page>
  )
}

