// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import '@openzeppelin/contracts/access/Ownable.sol';
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

import "./meta-transactions/ContextMixin.sol";
import "./meta-transactions/NativeMetaTransaction.sol";

contract OwnableDelegateProxy {}

contract ApprovedSpenderContract {}  // this one is a mock for tests

contract ProxyRegistry {
  mapping(address => OwnableDelegateProxy) public proxies;
}

contract PixilNFT is Ownable, ERC721, ContextMixin, NativeMetaTransaction {
    using SafeMath for uint;

    address public proxyRegistryAddress;
    string private _baseTokenUri = 'https://artillery-api.herokuapp.com/';
    uint public totalSupply = 5000;
    uint public currentTokenId = 0;
    uint public cost = 0.03 ether;
    uint public decimals = 0;
    address private _ryanAddress = 0x81b2C1BA7b5173Ba89acBECf82C83edac3898F5F;
    bool private _mintingAllowed = true;
    
    constructor(
        string memory _name, 
        string memory _symbol,
        address _proxyRegistryAddress
    ) ERC721(_name, _symbol) {
        proxyRegistryAddress = _proxyRegistryAddress;
        _initializeEIP712(_name);
    }

    function ryanMint() public onlyOwner {
        uint256 newTokenId = _getNextTokenId();
        _mint(_ryanAddress, newTokenId);
        _incrementTokenId();
    }

    function mintTo(address _to) public payable {
        if (msg.sender != owner())
            require(msg.value >= cost, 'Not enough ETH sent; check price!');
        uint256 newTokenId = _getNextTokenId();
        _mint(_to, newTokenId);
        _incrementTokenId();
    }

    function freeMint(address _to) public {
        uint256 newTokenId = _getNextTokenId();
        require(newTokenId <= 250, 'Only the first 250 mints are free :(');
        require(balanceOf(msg.sender) < 5, 'One can only mint up to 5 for free');
        _mint(_to, newTokenId);
        _incrementTokenId();
    }

    function _getNextTokenId() private view returns (uint256) {
        return currentTokenId.add(1);
    }

    function _incrementTokenId() private {
        currentTokenId++;
    }

    function baseTokenURI() virtual public view returns (string memory) {
        return _baseTokenUri;
    }

    function setBaseTokenURI(string memory _uri) public onlyOwner returns (bool ok)
    {
        _baseTokenUri = _uri;
        return true;
    }

    function tokenURI(uint256 _tokenId) override public view  returns (string memory)
    {
        return string(abi.encodePacked(baseTokenURI(), Strings.toString(_tokenId)));
    }

    function isApprovedForAll(address owner, address operator)
        override
        public
        view
        returns (bool)
    {
        // whitelist OpenSea proxy contract for easy trading.
        ProxyRegistry proxyRegistry = ProxyRegistry(proxyRegistryAddress);
        if (address(proxyRegistry.proxies(owner)) == operator) {
            return true;
        }

        return super.isApprovedForAll(owner, operator);
    }

    function _msgSender() internal override view returns (address sender) {
      return ContextMixin.msgSender();
    }

    receive() external payable {}

    function withdraw() public onlyOwner returns (bool) {
        uint amount = address(this).balance;
        return payable(owner()).send(amount);
    }
}

