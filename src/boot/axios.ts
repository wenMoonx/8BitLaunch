import { boot } from 'quasar/wrappers';
import axios from 'axios';

export default boot(({ app }) => {
  const instance = axios.create();

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      useNotify(
        'negative',
        Q.format.capitalize(error?.response?.data?.err || 'Error happened!')
      );
      return Promise.reject(error);
    }
  );

  instance.interceptors.request.use((ctx) => {
    if (process.env.SERVER) return ctx;

    ctx.headers = { Authorization: localStorage.getItem('token') || '' };

    return ctx;
  });

  app.config.globalProperties._axios = instance;
});
