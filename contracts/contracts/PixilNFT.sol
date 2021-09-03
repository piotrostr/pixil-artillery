// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract PixilNFT is ERC721('PixilArtillery', 'PXART'), Ownable {

    string public imageHash = '';

    string public baseUri = 'https://base-uri';

    uint public totalSupply = 5000;

    function updateBaseUri(string memory _baseUri) public onlyOwner returns (bool) {
        baseUri = _baseUri;
        return true;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseUri;
    }
}

