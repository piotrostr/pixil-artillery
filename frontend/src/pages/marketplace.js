import Head from 'next/head'
import Mint from 'components/Mint'
import { Page, Footer } from 'components/styled'

export default function Marketplace() {
  return (
    <Page>
      <Head>
        <title>Pixil Artillery</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <iframe 
	src='https://testnets.opensea.io/collection/pixilartillery?embed=true'
	width='100%'
	height='100%'
	frameborder='0'
	allowfullscreen
       />
    </Page>
  )
}

