import { PostgrestError } from '@supabase/supabase-js';

export const userHelperss = () => console.log('Heplers are used');

export const useMerge = (obj1: any, obj2: any) =>
  Object.keys(obj2)
    .filter((key) => key in obj1)
    .forEach((key) => (obj1[key] = obj2[key]));

export const useSlug = (content: string) => content.replaceAll(' ', '-');

export const raiseErr = (error: PostgrestError | undefined | string) =>
  new Error(JSON.stringify(error));

export const addressShortener = (address: string | undefined) => {
  if (!address) return address;

  return `0x...${address.substring(38)}`;
};

export function hexToRgb(hex: string) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}`
    : null;
}

export const getTg = (address: string | undefined) => {
  return address?.startsWith('@') ? address.substring(1) : address;
};

export const cappedText = (d: string | null | undefined) =>
  computed(() => {
    if (!d) return '';
    if (d.length < 200) return d;

    const index = d.indexOf(' ', 200);

    return d.substring(0, index) + '...';
  });

import logo from '~/src/assets/img/StandardPool.png';
import nft from '~/src/assets/img/NFTPool.png';
import credit from '~/src/assets/img/CreditPool.png';

export const pools = [
  {
    title: 'Standard Pool',
    subtitle: 'Stake and Earn 8Bit!',
    apy: '12%',
    lockPeriod: 'None',
    minLockTime: '30 days',
    note: 'There is a flexibility to unstake the tokens at any time.',
    poolInfo: `
    👉 APY - 12% <br/> 
    👉 Min limit - <i>5,000</i> $8Bit Tokens <br/>
    👉 Staking period - <i>30 days</i>  <br/>
    👉 Reflection - Yes (BTC Bep-20) <br/>
    👉 Locking - No <br/>
    👉 Emergency Unstake - Yes  <br/>
    👉 Penalty <i>20 % deduction from earned APY rewards in case of emergency unstaking</i> <br/> <br/>
    👉 Eligibility - <i class="text-bold">Eveyone having minimum required number of $8Bit tokens in their wallets</i>

`,
    img: logo,
  },
  {
    title: 'NFT Holders Pool',
    subtitle: '3X APY- only NFT holders!',
    apy: '36%',
    lockPeriod: 'None',
    minLockTime: '30 days',
    note: 'There is a flexibility to unstake the tokens at any time.',
    poolInfo: `👉 APY - 36% <br/>
    👉 Min limit - <i>25,000</i> $8Bit Tokens <br/>  
    👉 Staking period - 30 days  <br/>
    👉 Reflection - Yes (BTC Bep-20) <br/>
    👉 Locking - No  <br/>
    👉 Emergency Unstake - Yes  <br/>
    👉 Penalty <i>20 % deduction from earned APY rewards in case of emergency unstaking</i> <br/> <br/>
    👉 Eligibility - <i class="text-bold">Only those who have ecosystem NFTs and having minimum required $8Bit tokens in their wallets</i> 
    `,
    img: nft,
  },
  {
    title: 'Credit Pool',
    subtitle: 'Get BUSD against staking!',
    apy: '36%',
    lockPeriod: '90 days',
    minLockTime: '90 days',
    poolInfo: `👉 APY - 36% <br/>
      👉 Min limit - <i>150,000</i> $8Bit Tokens <br/>  
      👉 Staking period - 90 days  <br/>
      👉 Reflection - Yes (BTC Bep-20) <br/>
      👉 Locking - <span class="text-bold">YES</span>  <br/>
      👉 Emergency Unstake - <span class="text-bold">NO</span>  <br/>
      👉 Eligibility - <i class="text-bold">Everyone having minimum required number of tokens in their wallets</i>  <br/> <br/>
`,

    note: 'There is <span class="text-bold">NO</span> flexibility to unstake or unlock the tokens before 90 Days.',
    img: credit,
  },
];
