import Image from 'next/image'
import Head from 'next/head'
import styled from 'styled-components'
import ConnectWallet from 'components/ConnectWallet'

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
  return (
    <Page>
      <Head>
        <title>Title</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConnectWallet />
      <Footer>
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
      </Footer>
    </Page>
  )
}
