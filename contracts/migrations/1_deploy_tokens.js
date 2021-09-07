const PixilNFT = artifacts.require("PixilNFT")
const MockProxyRegistry = artifacts.require('MockProxyRegistry')
const ApprovedSpenderContract = artifacts.require('ApprovedSpenderContract')

module.exports = async function (deployer) {
  await deployer.deploy(MockProxyRegistry)
  const proxy = await MockProxyRegistry.deployed()
  await deployer.deploy(PixilNFT, 'PixilArtillery', 'PXLART', proxy.address)
  await deployer.deploy(ApprovedSpenderContract)
}

