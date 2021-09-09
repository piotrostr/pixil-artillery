import Image from 'next/image'
import Head from 'next/head'
import Header from 'components/Header'
import Page from 'components/Page'
import HomeView from 'components/HomeView'
import SampleWeaponsVault from 'components/SampleWeaponsVault'
import TextSection from 'components/TextSection'
import Rarity from 'components/Rarity'
import Faq from 'components/Faq'

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Pixil Artillery</title>
        <meta name="description" content="content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HomeView />
      <SampleWeaponsVault />
      <TextSection />
      <Rarity />
      <Faq />
      <div style={{ marginTop: 30, paddingBottom: 30 }}>
        developed by: <b><a href={'https://github.com/piotrostr'}>@piotrostr</a></b>
      </div>
    </Page>
  )
}

