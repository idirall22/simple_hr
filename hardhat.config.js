require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 const INFURA_API_KEY = process.env.INFURA_API_KEY;
 const GOERLI_PRIVATE_KEY = process.env.GOERLI_PRIVATE_KEY;
 const MAINNET_PRIVATE_KEY = process.env.MAINNET_PRIVATE_KEY;
 
 module.exports = {
  defaultNetwork: "hardhat",
  solidity: {
      version: "0.8.7",
      settings: {
          optimizer: {
              enabled: true,
              runs: 200
          }
      }
  },
  networks: {
      localhost: {
          url: "http://127.0.0.1:8545"
      },
      goerli: {
          url: `https://goerli.infura.io/v3/${INFURA_API_KEY}`,
          accounts: [`0x${GOERLI_PRIVATE_KEY}`]
      },
      mainnet: {
          url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
          accounts: [`0x${MAINNET_PRIVATE_KEY}`]
      }
  },
  typechain: {
      outDir: "typechain",
      target: "ethers-v5"
  }
};
