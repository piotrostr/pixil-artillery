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
`

const HeaderContainer = styled.div`
  width: 70%;
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
`

export default function Header() {
  return (
    <HeaderContainer>
        <a href={'#'}>
          <Image 
            src={'/header-logo.svg'}
            width={327}
            height={103}
          />
        </a>
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
        <SpacyRow>
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
              width={35}
              height={35}
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
