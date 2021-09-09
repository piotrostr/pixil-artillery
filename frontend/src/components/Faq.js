import styled from 'styled-components'
import Image from 'next/image'

const faq = [
  {
    title: 'What is an NFT?',
    text: `An NFT, or “non-fungible token”, is a creative way to describe any
      digital art, collectible, or object on the block chain that is easily
      transactable. A platformless way to trade, sell, or create on the
      blockchain.`
  },
  {
    title: 'Where happens after minting?',
    text: `After you mint, or purchase, one of our NFT’s, it will be sent
      directly to your wallet. After that, you are free to do what you like with
      it. Look at how cool it is. Trade in our Discord. Sell it on OpenSea. Hold
      on to it until the floor reaches 1 ETH. Do as you please, the world is your
      oyster.`
  },
  {
    title: 'How can I tell if I got a rare one?',
    text: `Refer to our rarity chart above. Keep in mind just because you got a
      “rare” trait, or just because you got no “rare” traits that does not mean
      your weapon is valueless or even worth less than the rare ones. Often times
      communities decide on what sells, a great example is the hoodies from
      CryptoPunks.`
  },
  {
    title: 'Is Pixil-Artillery a good investment?',
    text: `We are not here to advise you on investing, but what we can do is
      assure you that we have many things planned for the future for this
      project. We will not simply abandon the project post mint as many NFT
      projects do.`
  },
]

const Heading = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 44px;
  color: #2B2D42;
  position: absolute;
  top: 30px;
  @media screen and (max-width: 750px) {
    position: unset;
    font-size: 22px;
  }
`

const Subheading = styled.div`
  font-family: Nunito Sans;
  font-weight: 900;
  font-size: 20px;
  line-height: 32px;
  text-align: center;
  color: #000000;
  height: 80px;
  @media screen and (max-width: 750px) {
    position: unset;
    font-size: 22px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`

const Paragraph = styled.div`
  font-family: Nunito Sans;
  font-weight: 600;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  color: #000000;
  mix-blend-mode: normal;
  width: 176px;
`

const BoxContainer = styled.div`
  width: 227px;
  background: #CFF4FF;
  border: 4px solid #2A9BBF;
  box-sizing: border-box;
  box-shadow: 0px 8px 4px rgba(0, 0, 0, 0.25), 
    inset 0px 8px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 5px 15px 5px;
`

const Container = styled.div`
  max-width: 1152px;
  width: 95%;
  display: flex;
  justify-content: space-around;
  background: #ffffff;
  padding: 20px;
  padding-top: 100px;
  border-radius: 10px;
  position: relative;
  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    padding-top: 20px;

    & > * {
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
`

const VerticalImageContainer = styled.div`
  @media screen and (max-width: 750px) {
    display: none;
  }
`

const HorizontalImageContainer = styled.div`
  @media screen and (min-width: 750px) {
    display: none;
  }
`

function Box({ title, text }) {
  return (
    <BoxContainer>
      <Subheading>
        {title}
      </Subheading>
      <Paragraph>
        {text}
      </Paragraph>
    </BoxContainer>
  )
}

export default function Faq() {
  return (
    <Container id="faq">
      <Heading>
        Frequently Asked Questions
      </Heading>
      {
        faq.slice(0, 2).map((entry, key) => 
          <Box key={key} title={entry.title} text={entry.text} />
        )
      }
      <VerticalImageContainer>
        <Image 
          src={'/weapon-divider.png'} 
          width={61}
          height={300}
          alt={'weapon-divider'}
        />
      </VerticalImageContainer>
      <HorizontalImageContainer>
        <Image 
          src={'/weapon-divider-horizontal.png'} 
          width={300}
          height={61}
          alt={'weapon-divider-horizontal'}
        />
      </HorizontalImageContainer>
      {
        faq.slice(2).map((entry, key) => 
          <Box key={key} title={entry.title} text={entry.text} />
        )
      }
    </Container>
  )
}

