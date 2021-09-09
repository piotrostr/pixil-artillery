import Image from 'next/image'
import styled from 'styled-components'

const Title = styled.div`
  font-family: Nunito Sans;
  font-style: normal;
  font-weight: 900;
  font-size: 32px;
  line-height: 44px;
  color: #2B2D42;
  margin-bottom: 15px;
  @media screen and (max-width: 750px) {
    font-size: 24px;
    margin-bottom: 0;
  }
`

const WeaponImage = styled.div`
  @media screen and (max-width: 750px) {
    width: 100px;
    height: 100px;
  }
`

const WeaponImageLast = styled.div`
  @media screen and (max-width: 750px) {
    display: none;
  }
`

const Container = styled.div`
  width: 80%;
  max-width: 1012px;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  @media screen and (max-width: 750px) {
    padding: 20px;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  overflow: auto;
  @media screen and (max-width: 750px) {
    width: unset;
    overflow: unset;
    flex-wrap: wrap;
    & > * {
      flex: 1 1 100px;
      margin: 15px;
    }
  }
`

export default function SampleWeaponsVault() {
  // todo could just use the grid
  return (
    <Container>
      <Title>Sample Weapons Vault</Title>
      <Row>
        <WeaponImage>
          <Image 
            src={'/sample1.png'}
            width={150}
            height={150}
            alt={'sample1'}
          />
        </WeaponImage>
        <WeaponImage>
          <Image 
            src={'/sample2.png'}
            width={150}
            height={150}
            alt={'sample2'}
          />
        </WeaponImage>
        <WeaponImage>
          <Image 
            src={'/sample3.png'}
            width={150}
            height={150}
            alt={'sample3'}
          />
        </WeaponImage>
        <WeaponImage>
          <Image 
            src={'/sample4.png'}
            width={150}
            height={150}
            alt={'sample4'}
          />
        </WeaponImage>
        <WeaponImageLast>
          <Image
            src={'/sample5.png'}
            width={150}
            height={150}
            alt={'sample5'}
          />
        </WeaponImageLast>
      </Row>
    </Container>
  )
}

