import { colors } from '~/uno.colors';
import { boot } from 'quasar/wrappers';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';

export default boot(async ({ app }) => {
  app.config.globalProperties._web3Modal = new Web3Modal({
    network: 'binance',
    cacheProvider: true,
    disableInjectedProvider: false,
    providerOptions: {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          rpc: {
            56: 'https://bsc-dataseed.binance.org/',
          },
          network_id: '0x38',
          chainId: 56,
        },
      },
    },
    theme: {
      background: colors.primaryBg,
      main: '#FFFFFF',
      secondary: '#FFFFFF',
      border: 'rgba(255, 255, 255, 0.02)',
      hover: colors.secondaryBg,
    },
  });
});
