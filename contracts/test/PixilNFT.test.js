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
    let supply = await instance.totalSupply()
    console.log(instance.address)
    let supplyPostMint = await instance.totalSupply()
  })

  it('should be able to receive eth for minting', async function() {
  })

  it('should be able to withdraw the eth from minting', async function() {
  })

  it('should be able to trade on opensea', async function() {
  })

  it('should retrieve the uri correctly', async function() {
  })

  it('should be able to update the uri', async function() {
  })

  it("should allow calling setApprovalForAll with a meta transaction", async function () {
    const wallet = new MockProvider().createEmptyWallet();
    const user = await wallet.getAddress()

    let name = await instance.name();
    let nonce = await instance.getNonce(user);
    let version = await instance.ERC712_VERSION();
    let chainId = await instance.getChainId();
    let domainData = {
      name: name,
      version: version,
      verifyingContract: instance.address,
      salt: '0x' + web3.utils.toHex(chainId).substring(2).padStart(64, '0'),
    };
    const functionSignature = await web3ERC1155.methods.setApprovalForAll(approvedContract.address, true).encodeABI()
    let { r, s, v } = await signMetaTransaction(
      wallet,
      nonce,
      domainData,
      functionSignature
    );

    assert.equal(await instance.isApprovedForAll(user, approvedContract.address), false);
    truffleAssert.eventEmitted(
      await instance.executeMetaTransaction(
	user,
	functionSignature,
	r,
	s,
	v
      ),
      'ApprovalForAll',
      {
	account: user,
	operator: approvedContract.address,
	approved: true
      }
    );
    assert.equal(await instance.isApprovedForAll(user, approvedContract.address), true);
  });
})
