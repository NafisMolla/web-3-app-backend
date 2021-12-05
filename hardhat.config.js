require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.0",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/0Gq0b1Adj518mhpH8PLYSMEHVsbIBxfz",
      accounts: [
        "034a166eb17dcf29d305f0fdf7a9ba79b24412c4ef3d7895bb1c4610e45a7747",
      ],
    },
  },
};
