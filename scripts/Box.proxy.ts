
const testBox = async () => {
    const Box = await hre.ethers.getContractFactory('Box')
    const box = await hre.upgrades.deployProxy(Box, [42], {initializer: 'store'})
    let value = await box.retrieve();
    console.log(value);
    console.log(box.address);
};

testBox()
  .then(() => process.exit(0))
  .catch(error => {
    console.log(error);
    process.exit(1);
  });