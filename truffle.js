module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      host: "localhost",
      port: 8545,
      network_id: "4", // Rinkeby network id
      from:"0x3d7342d400aa70d1dd48ce09fd82db006ed21eee"
    }
  },
  compilers: {
    solc: {
      version: "0.7.5",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200   // Optimize for how many times you intend to run the code
        }
      }
    }    
  }
};