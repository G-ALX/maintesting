import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'COFE',
    lpAddresses: {
      97: '0xb6feccb25df0e070c7b8b98d2b2a26f6e56752a9',
      56: '0xf0eebaB492D4E3c7500F30401534fb1eb9635e2d',
    },
    tokenSymbol: 'SYRUP',
    tokenAddresses: {
      97: '0x51f336Ba54D87f12b7459F3a4b7064f6FC7cdBf2',
      56: '0xf0eebaB492D4E3c7500F30401534fb1eb9635e2d',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'COFE-BNB LP',
    lpAddresses: {
      97: '0xa1A98776ddcbeC2f148Aad0266A7A8c9FD4e7f27',
      56: '0x137621affdbef36840bb03833f53eff52a93b67d',
    },
    tokenSymbol: 'COFE',
    tokenAddresses: {
      97: '0xb6feccb25df0e070c7b8b98d2b2a26f6e56752a9',
      56: '0xf0eebaB492D4E3c7500F30401534fb1eb9635e2d',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'COFE-BUSD LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0xd23b77f26b7f6bdc64318e4c1b10e6dde891d07a',
    },
    tokenSymbol: 'COFE',
    tokenAddresses: {
      97: '0xb6feccb25df0e070c7b8b98d2b2a26f6e56752a9',
      56: '0xf0eebaB492D4E3c7500F30401534fb1eb9635e2d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },  
  {
    pid: 3,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '0xE66790075ad839978fEBa15D4d8bB2b415556a1D',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '0x8301F2213c0eeD49a7E28Ae4c3e91722919B8B47',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
]

export default farms
