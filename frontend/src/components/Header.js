import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const SpacyRow = styled.div`
  display: flex;
  flex-direction: row;
  & > div {
    margin-left: 5px;
    margin-right: 5px;
  }
  & > a {
    margin-left: 20px;
    margin-right: 20px;
  }
  align-items: center;
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
      <SpacyRow style={{ marginTop: 10 }}>
        <div>
          <Image 
            src={'/twitter.svg'}
            width={35}
            height={35}
          />
        </div>
        <div>
          <Image 
            src={'/insta.svg'}
            width={25}
            height={25}
          />
        </div>
        <div>
          <Image 
            src={'/discord.svg'}
            width={35}
            height={35}
          />
        </div>
        <div>
          <Image 
            src={'/tiktok.svg'}
            width={35}
            height={35}
          />
        </div>
      </SpacyRow>
    </HeaderContainer>
  )
}
