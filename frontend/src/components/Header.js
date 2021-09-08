import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const SpacyRow = styled.div`
  display: flex;
  flex-direction: row;
  & > a {
    margin-left: 20px;
    margin-right: 20px;
  }
  align-items: center;
`

const LessSpacyRow = styled(SpacyRow)`
  & > a {
    margin-left: 5px;
    margin-right: 5px;
  }
`

const HeaderContainer = styled.div`
  width: 70%;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  height: 100px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    text-decoration: none;
  }
  margin-bottom: 10px;
  @media screen and (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 50px;
  }
`

const Navigation = styled.div`
  @media screen and (max-width: 1100px) {
    display: none;
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <a style={{ marginTop: 15 }}>
          <Image 
            src={'/header-logo.png'}
            width={300}
            height={65.5}
          />
        </a>
      </Link>
      <Navigation>
        <SpacyRow>
          <a href={'#about'}>
            About
          </a>
          <a href={'#rarity'}>
            Rarity
          </a>
            <a href={'#faq'}>
              FAQ
            </a>
            <a href={'#roadmap'}>
              Roadmap
            </a>
        </SpacyRow>
      </Navigation>
      <LessSpacyRow style={{ marginTop: 10 }}>
        <a href={'https://twitter.com/pixil_artillery'}>
          <Image 
            src={'/twitter.png'}
            width={50}
            height={27}
          />
        </a>
        <a href={'https://instagram.com/pixilartillery'}>
          <Image 
            src={'/instagram.png'}
            width={30}
            height={30}
          />
        </a>
        <a href={'https://discord.com/WayqMgya'}>
          <Image 
            src={'/discord.png'}
            width={50}
            height={28}
          />
        </a>
        <a href={'https://vm.tiktok.com/ZMRP75exJ'}>
          <Image 
            src={'/tiktok.png'}
            width={45}
            height={45}
          />
        </a>
      </LessSpacyRow>
    </HeaderContainer>
  )
}
