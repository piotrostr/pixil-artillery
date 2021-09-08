import Image from 'next/image'
import styled from 'styled-components'

const Heading = styled.div`
  font-family: Nunito Sans;
  font-style: italic;
  font-weight: 900;
  font-size: 50px;
  line-height: 32px;
  color: #000000;
  position: absolute;
  top: 0;
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
  padding-top: 70px;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export default function Rarity() {
  return (
    <Container>
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
        <div style={{ marginLeft: 15 }}>
          <Image
            src={'/rarity.png'}
            width={359}
            height={553}
            alt={'rarity'}
          />
        </div>
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