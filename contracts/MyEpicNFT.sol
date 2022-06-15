// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;
import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";

contract MyEpicNFT is ERC721URIStorage{

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    constructor() ERC721 ("huuvuotNFT", "HVT") {
        console.log("This is my NFT contract. Woah!");
    }

    string baseSVG = "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'> <style>.base { fill: white; font-family: serif; font-size: 14px; }</style><rect width='100%' height='100%' fill='black' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>";
    function makeAnEpicNFT() public {
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        string memory _tokenURI = pickRandomFirstWord(newItemId);
        console.log(_tokenURI);
        _setTokenURI(newItemId, _tokenURI);
        _tokenIds.increment();
        console.log("An NFT w/ ID %s has been minted to %s", newItemId, msg.sender);
    }

    function pickRandomFirstWord(uint256 tokenId) private view returns(string memory){
        string memory finalSvg = Base64.encode(abi.encodePacked(baseSVG, Strings.toString(tokenId), "Fantastic", "Cupcake", "Goku", "</text></svg>"));
        string memory json = Base64.encode((abi.encodePacked('{ "name": "huuvuot", "description":"this is huuvuot token", "image":"data:image/svg+xml;base64,', finalSvg, '"}')));
        string memory finalTokenURI = string(abi.encodePacked("data:application/json;base64,", json));
        return finalTokenURI;
    }
}