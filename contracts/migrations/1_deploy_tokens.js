const PixilNFT = artifacts.require("PixilNFT")
const MockProxyRegistry = artifacts.require('MockProxyRegistry')
const ApprovedSpenderContract = artifacts.require('ApprovedSpenderContract')

module.exports = async function (deployer) {
  // await deployer.deploy(MockProxyRegistry)
  // const proxy = await MockProxyRegistry.deployed()
  await deployer.deploy(PixilNFT, 'PixilArtillery', 'PXLART', '0xa5409ec958C83C3f309868babACA7c86DCB077c1')
  // await deployer.deploy(ApprovedSpenderContract)
}

