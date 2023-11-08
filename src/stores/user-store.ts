import { defineStore } from 'pinia';

import { ethers } from 'ethers';

export const useUserStore = defineStore('user', {
  state: () => ({
    pageData: [],
    user: {},
    wallet: {
      address: '',
      chainId: 0,
      provider: null as unknown as ethers.providers.Web3Provider,
      tier: 'Inactive',
    },
  }),
});
