import { AxiosInstance } from 'axios';
import { getCurrentInstance } from 'vue';

export const useAxios = () =>
  getCurrentInstance()?.appContext.app.config.globalProperties
    ._axios as AxiosInstance;
