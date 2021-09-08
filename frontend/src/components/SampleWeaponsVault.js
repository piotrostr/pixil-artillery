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
`

const WeaponImage = styled(Image)`
  border: 3px solid #000000;
`

const Container = styled.div`
  width: 80%;
  max-width: 1012px;
  min-height: 257px;
  background: #FEFEFE;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  overflow: auto;
`

export default function SampleWeaponsVault() {
  // todo could just use the grid
  return (
    <Container>
      <Title>Sample Weapons Vault</Title>
      <Row>
        <WeaponImage 
          src={'/sample1.png'}
          width={150}
          height={150}
          alt={'sample1'}
        />
        <WeaponImage 
          src={'/sample2.png'}
          width={150}
          height={150}
          alt={'sample2'}
        />
        <WeaponImage 
          src={'/sample3.png'}
          width={150}
          height={150}
          alt={'sample3'}
        />
        <WeaponImage 
          src={'/sample4.png'}
          width={150}
          height={150}
          alt={'sample4'}
        />
        <WeaponImage 
          src={'/sample5.png'}
          width={150}
          height={150}
          alt={'sample5'}
        />
      </Row>
    </Container>
  )
}

