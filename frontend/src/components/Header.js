import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    text-decoration: none;
  }
  margin-bottom: 10px;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <a>
          <Image 
            src={'/logo.jpeg'}
            width={143}
            height={103}
          />
        </a>
      </Link>
      <Link href={'/marketplace'}>
        <a>
          Marketplace
        </a>
      </Link>
      <Link href={'/mint'}>
        <a>
          Mint
        </a>
      </Link>
    </HeaderContainer>
  )
}
