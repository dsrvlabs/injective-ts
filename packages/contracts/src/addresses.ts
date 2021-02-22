import { ZERO_ADDRESS } from '@injectivelabs/utils'
import { ChainId } from '@injectivelabs/ts-types'
import { ChainIdContractAddresses } from './types'

export const contractAddresses = {
  '1': {
    depositManager: '0xd987AD44dF31156f6589cd70A30000Cf0955668D',
    futures: ZERO_ADDRESS,
    baseCurrency: ZERO_ADDRESS,
    priceFeeder: ZERO_ADDRESS,
    peggy: '0xb68de9f5635fd6C3b075F209b8e47d06D3C7a8Af',
    injective: '0xe28b3b32b6c345a34ff64674606124dd5aceca30',
  },
  '3': {
    depositManager: ZERO_ADDRESS,
    futures: ZERO_ADDRESS,
    baseCurrency: ZERO_ADDRESS,
    priceFeeder: ZERO_ADDRESS,
    peggy: ZERO_ADDRESS,
    injective: ZERO_ADDRESS,
  },
  '4': {
    depositManager: ZERO_ADDRESS,
    futures: ZERO_ADDRESS,
    baseCurrency: ZERO_ADDRESS,
    priceFeeder: ZERO_ADDRESS,
    peggy: ZERO_ADDRESS,
    injective: ZERO_ADDRESS,
  },
  '42': {
    depositManager: '0x3768d0eDe5E5Cb9d9b163F46d86791Ca83954579',
    futures: ZERO_ADDRESS,
    baseCurrency: ZERO_ADDRESS,
    priceFeeder: ZERO_ADDRESS,
    peggy: '0x3A509fB16797164B6c958d6265720BC9E6cB0633',
    injective: '0x1F71E78FC20Dd823085df8c98Eada9c1a1b7c640',
  },
  '888': {
    depositManager: ZERO_ADDRESS,
    peggy: ZERO_ADDRESS,
    futures: '0x2af57c6f558d831afd901d942820b002163de4ef',
    priceFeeder: '0x1000e635cb1c7b2f9d63561b64a03285621387b3',
    baseCurrency: '0xbac42cd5af0a26648aa459605bddd4020f939cf5',
    injective: ZERO_ADDRESS,
  },
  '1337': {
    depositManager: ZERO_ADDRESS,
    peggy: '0x8d61158a366019aC78Db4149D75FfF9DdA51160D',
    futures: ZERO_ADDRESS,
    priceFeeder: ZERO_ADDRESS,
    baseCurrency: ZERO_ADDRESS,
    injective: '0x04B5dAdd2c0D6a261bfafBc964E0cAc48585dEF3',
  },
  '31337': {
    depositManager: ZERO_ADDRESS,
    peggy: '0x25B8Fe1DE9dAf8BA351890744FF28cf7dFa8f5e3',
    futures: ZERO_ADDRESS,
    priceFeeder: ZERO_ADDRESS,
    baseCurrency: ZERO_ADDRESS,
    injective: '0x0B1ba0af832d7C05fD64161E0Db78E85978E8082',
  },
}

export const getContractAddressesForChainOrThrow = (
  chainId: ChainId,
): ChainIdContractAddresses => {
  const chainToAddresses: {
    [chainId: string]: ChainIdContractAddresses
  } = contractAddresses

  if (chainToAddresses[chainId] === undefined) {
    throw new Error(`Unknown chain id (${chainId}).`)
  }

  return { ...chainToAddresses[chainId] }
}