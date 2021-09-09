import { useEffect, useState } from 'react'
import { NFT_ABI, NFT_ADDRESS_ROPSTEN, NFT_ADDRESS_RINKEBY } from 'contract'
import { useWeb3React } from '@web3-react/core'
import Image from 'next/image'
import { Info } from 'components/Mint'

export default function YouMinted({ id }) {
  const { library, active } = useWeb3React()
  const [metadata, setMetadata] = useState(null)

  useEffect(async function() {
    if (active)
      await getData()
  }, [])

  async function getData() {
    const instance = new library.eth.Contract(
      NFT_ABI, 
      NFT_ADDRESS_RINKEBY
    )
    const baseURI = await instance.methods.baseTokenURI().call()
    const response = await fetch(baseURI + id)
    const metadata = await response.json()
    setMetadata(metadata)
  }
  return (
    <>
      {
        metadata && 
        <>
          <Info style={{ fontSize: 30 }}><b>#{id}</b></Info>
          <Image 
            src={metadata.image}
            width={150}
            height={150}
            alt={'nft'}
          />
          <div>
            {
              metadata.attributes.map((attribute, key) =>
                <Info key={key}><b>{attribute.trait_type}: </b> {attribute.value ?? 'None'}</Info>
              )
            }
          </div>
        </>
      }
    </>
  )
}
