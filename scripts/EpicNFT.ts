const hre = require('hardhat')
const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyEpicNFT')
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to: ", nftContract.address);
    // call function
    let myToken = await nftContract.makeAnEpicNFT();
    await myToken.wait()
    console.log("Minted NFT #1")
};

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.log(error);
    process.exit(1);
  });