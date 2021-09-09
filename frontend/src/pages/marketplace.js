import Head from 'next/head'
import Page from 'components/Page'
import Header from 'components/Header'
import Link from 'next/link'

export default function Marketplace() {
  return (
    <Page>
      <Head>
        <title>Pixil Artillery</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <Link href={'/'} >
          <a>
            Go back to homepage
          </a>
        </Link>
      </div>
      <iframe 
	src='https://opensea.io/collection/pixil-artillery?embed=true'
	width='100%'
	height='100%'
	frameBorder='0'
	allowFullScreen
       />
    </Page>
  )
}

