import { useEffect, useState } from 'react'
import { NFT_ABI, NFT_ADDRESS_ROPSTEN, NFT_ADDRESS_RINKEBY } from 'contract'
import { useWeb3React } from '@web3-react/core'
import Image from 'next/image'

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
    console.log(baseURI)
    const response = await fetch(baseURI + id)
    const metadata = await response.json()
    setMetadata(metadata)
  }
  return (
    <div>
      {
        metadata &&
        <div>
          <Image 
            src={metadata.image}
            width={100}
            height={100}
            alt={'nft'}
          />
            {
              metadata.attributes.map((attribute, key) =>
                <div key={key}>{attribute.trait_type}: {attribute.value}</div>
              )
            }
        </div>
      }
    </div>
  )
}
