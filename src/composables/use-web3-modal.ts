import { getCurrentInstance } from 'vue';
import Web3Modal from 'web3modal';

export const useWeb3Modal = () =>
  getCurrentInstance()?.appContext.app.config.globalProperties._web3Modal as
    | Web3Modal
    | undefined;
