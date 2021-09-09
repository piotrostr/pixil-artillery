import Image from 'next/image'
import styled from 'styled-components'

const Heading = styled.div`
  font-family: Nunito Sans;
  font-weight: 900;
  font-size: 37px;
  line-height: 32px;
  color: #000000;
  position: absolute;
  top: 30px;
  left: 0;
`

const Container = styled.div`
  position: relative;
  width: 80%;
  max-width: 1012px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  align-items: flex-start;
  padding-top: 100px;
  margin-bottom: 150px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 750px) {
    flex-direction: row;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 750px) {
    flex-direction: column;
  }
`

const RarityContainer = styled.div`
  @media screen and (min-width: 750px) {
    margin-left: 15px;
  }
`

export default function Rarity() {
  return (
    <Container id="rarity">
      <Heading>
        Rarity:
      </Heading>
      <Row>
        <Image 
          src={'/all-layers.png'}
          width={263}
          height={567}
          alt={'all-layers'}
        />
        <RarityContainer>
          <Image
            src={'/rarity.png'}
            width={359}
            height={553}
            alt={'rarity'}
          />
        </RarityContainer>
      </Row>
        <Column>
          <Image
            src={'/example.png'}
            width={200}
            height={200}
            alt={'example'}
          />
          <div style={{ marginTop: 15 }}>
            <Image
              src={'/example-description.png'}
              width={145}
              height={220}
              alt={'example'}
            />
          </div>
        </Column>
    </Container>
  )
}
