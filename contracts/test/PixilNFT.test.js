const Pixil = artifacts.require('PixilNFT')
const MockProxyRegistry = artifacts.require('MockProxyRegistry')
const ApprovedSpenderContract = artifacts.require('ApprovedSpenderContract')

const name = 'PixilArtillery'
const symbol = 'PXLART'

contract('PixilNFT', function (accounts) {

  let proxy
  let instance
  let approvedContract

  beforeEach(async function() {
    proxy = await MockProxyRegistry.deployed()
    instance = await Pixil.deployed(name, symbol, proxy.address)
    approvedContract = await ApprovedSpenderContract.deployed()
  })

  it('should be able to mint', async function() {
    console.log(instance.address)
  })

  it('should be to retrieve url', async function() {
  })
  
  it('should be able to mint', async function() {
  })

  it('should be able to mint', async function() {
  })
})

