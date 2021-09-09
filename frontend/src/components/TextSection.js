import styled from 'styled-components'

const Heading = styled.div`
  font-family: Nunito Sans;
  font-weight: 900;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
  margin-bottom: 15px;
  @media screen and (max-width: 750px) {
    font-size: 22px;
    margin-top: 30px;
  }
`

const Paragraph = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.025em;
  color: #000000;
`

const Container = styled.div`
  position: relative;
  width: 80%;
  max-width: 1012px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  align-items: flex-start;
  b {
    font-weight: 800;
    color: rgb(206, 244, 255);
  }
  padding-top: 80px;
  margin-bottom: 60px;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media screen and (max-width: 750px) {
    width: 90%;
    margin: auto;
  }
`

const Arrow = styled.div`
  position: absolute;
  top: 28%;
  left: 45%;
  color: rgb(206, 244, 255);
  font-size: 90px;
  user-select: none;
  @media screen and (max-width: 750px) {
    display: none;
  }
`

export default function TextSection() {
  return (
    <Container id="about">
      <Column>
        <Heading>What is Pixil-Artillery?</Heading>
        <Paragraph>
          Pixil-Artillery consists of <b>5,000 algorithmically generated NFT
          weapons</b>, designed specifically for the blockchain. Each of these
          weapons is a completely unique NFT, with unique attributes assigned
          according to rarity. Most importantly, we are a small team that
          consists of four main individuals - a developer, two artists and a
          marketing specialist. We are a small team - but a <b>dedicated </b> 
          one, and we are continuing to work our hardest to ensure that not
          only the launch goes smoothly- but that this project has longevitity
          rewards it's intial minters.
        </Paragraph>
      </Column>
      <Arrow>→</Arrow>
      <Column>
        <Heading>Ok, this is dope. How much does it cost?</Heading>
        <Paragraph>
          On our launch dates, you will be able to see the minting button go
          live. The initial mint price for one weapon is <b>0.015 ETH, or around
          $55</b> as of the making of this site.
        </Paragraph>
      </Column>
    </Container>
  )
}

