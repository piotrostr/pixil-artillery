import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import MintButton from 'components/MintButton'

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Container = styled(Row)`
  max-width: 85%;
  margin-right: auto;
  margin-left: auto;
  justify-content: space-around;
  margin-top: 30px;
  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`

const MarketplaceButton = styled.div`
  width: 143px;
  height: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #CFF4FF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 24px;
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  margin-left: 20px;
`

const SubText = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  color: #2B2D42;
`

const MainText = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 49px;
  color: #000000;
`

const Rect = styled.div`
  position: absolute;
  width: 1153px;
  height: 457.5px;
  left: -1px;
  top: 251.5px;
`

const LogoContainer = styled.div`
  position: absolute;
  width: 730px;
  height: 784px;
  left: 360px;
  top: -67px;
`

const ImageContainer = styled.div`
  @media screen and (min-width: 750px) {
    margin-left: 80px;
  }
`

export default function HomeView() {
  return (
    <Container style={{ alignItems: 'center' }}>
      <div>
        <SubText>Welcome to</SubText>
        <MainText>Pixil-Artillery</MainText>
        <Row style={{ marginTop: 25 }}>
          <MintButton />
          <Link href={'/marketplace'}>
            <a>
              <MarketplaceButton>Marketplace</MarketplaceButton>
            </a>
          </Link>
        </Row>
      </div>
      <ImageContainer>
        <Image 
          src={'/main-logo.png'}
          width={435}
          height={377}
          alt={'main-logo'}
        />
      </ImageContainer>
    </Container>
  )
}

