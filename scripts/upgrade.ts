async function upgradeContract() {
    const BoxV2 = await hre.ethers.getContractFactory("BoxV2");
    let box_v1_address = "0x8d19A08686d4cCf83863Ffd8C236eF825fA0AD02";
    let boxv2 = await hre.upgrades.upgradeProxy(box_v1_address,BoxV2);
    console.log("upgrade success", boxv2.address);
}

upgradeContract()
  .then(() => process.exit(0))
  .catch(error => {
    console.log(error);
    process.exit(1);
  });