import { BigNumber, ethers } from 'ethers';
import { PancakeSwapAbi } from '~/src-ssr/contract';

const NETWORK_URL = 'https://bsc-dataseed.binance.org/';

export const usePriceCalculator = () => {
  const price = ref('Loading...');

  const provider = new ethers.providers.JsonRpcProvider(NETWORK_URL);

  const bnbBusd = new ethers.Contract(
    '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    PancakeSwapAbi,
    provider
  );
  const bnbToken = new ethers.Contract(
    '0x105EB9343Bf30D33641C0dAbC2431Cc323A56e45',
    PancakeSwapAbi,
    provider
  );

  if (!process.env.CLIENT) return price;

  const { resume } = useTimeoutPoll(() => {
    bnbBusd.getReserves().then((res: any) => {
      const bnbPrice = BigNumber.from(res._reserve1).div(
        BigNumber.from(res._reserve0)
      );

      bnbToken.getReserves().then((res: any) => {
        const bnbToken = BigNumber.from(res._reserve1).div(
          BigNumber.from(res._reserve0)
        );

        price.value =
          '$' +
          ethers.utils.formatUnits(
            bnbToken.toNumber() * bnbPrice.toNumber(),
            9
          );
      });
    });
  }, 20000);

  resume();

  return price;
};
