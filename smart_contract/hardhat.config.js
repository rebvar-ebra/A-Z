//https://ropsten.infura.io/v3/83cc5e67b6da4be39f42e97120db9dc6;

require('@nomiclabs/hardhat-waffle');


module.exports={
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url:'https://ropsten.infura.io/v3/83cc5e67b6da4be39f42e97120db9dc6',
      accounts:['0b8d7695813ccc88d2117676eba91bec90820942467640bea934cf51bf7116b9']
    }
  }
}

