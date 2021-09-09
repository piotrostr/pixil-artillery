const Pixil = artifacts.require('PixilNFT')
const MockProxyRegistry = artifacts.require('MockProxyRegistry')
const ApprovedSpenderContract = artifacts.require('ApprovedSpenderContract')

const truffleAssert = require('truffle-assertions')
const { MockProvider } = require('ethereum-waffle')
const { signMetaTransaction } = require("./utils/signMetaTransaction.js")

const name = 'PixilArtillery'
const symbol = 'PXLART'

contract('PixilNFT', function ([owner, ...accounts]) {

  let proxy
  let instance
  let approvedContract

  beforeEach(async function() {
    proxy = await MockProxyRegistry.deployed()
    instance = await Pixil.deployed(name, symbol, proxy.address)
    approvedContract = await ApprovedSpenderContract.deployed()
  })

  it('should be able to mint', async function() {
    let tokenId = await instance.currentTokenId()
    tokenId = tokenId.toNumber()
    const ethAmount = web3.utils.toWei('0.0150', 'ether')
    let tx = await instance.mintTo(accounts[0], { value: ethAmount })
    let tokenIdPostMint = await instance.currentTokenId()
    tokenIdPostMint = tokenIdPostMint.toNumber()
    assert.equal(tokenId + 1, tokenIdPostMint)
  })

  it('shouldnt be able to mint for not enough eth', async function() {
    const ethAmount = web3.utils.toWei('0.014', 'ether')
    await truffleAssert.fails(
      instance.mintTo(accounts[0], { value: ethAmount }),
      truffleAssert.ErrorType.REVERT
    )
  })

  it('should be able to receive eth for minting', async function() {
    const contractBalance = await web3.eth.getBalance(instance.address)
    assert.equal(contractBalance, web3.utils.toWei('0.015', 'ether'))
  })

  it('should be able to withdraw the eth from minting', async function() {
    let payAmount = await web3.eth.getBalance(instance.address)
    let initialOwnerBalance = await web3.eth.getBalance(owner)
    const tx = await instance.withdraw()
    const hash = tx.tx
    const transaction = await web3.eth.getTransaction(hash)
    const gasPrice = transaction.gasPrice
    const receipt = await web3.eth.getTransactionReceipt(hash)
    const gasUsed = Number(receipt.gasUsed)
    const gasCost = gasUsed * gasPrice
    let ownerBalance = await web3.eth.getBalance(owner)
    ownerBalance = Number(ownerBalance)
    initialOwnerBalance = Number(initialOwnerBalance)
    assert.ok(ownerBalance - initialOwnerBalance + gasCost > payAmount*0.999)
  })

  it('should retrieve the uri correctly', async function() {
    const uri = await instance.baseTokenURI()
    assert.equal(uri, 'https://artillery-api.herokuapp.com/')
  })

  it('should be able to update the uri', async function() {
    await instance.setBaseTokenURI('foo')
    assert.equal(await instance.baseTokenURI(), 'foo')
  })

})

