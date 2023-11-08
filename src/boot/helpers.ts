import { boot } from 'quasar/wrappers';

import converter from 'number-to-words';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $navTo: (url: string | null) => void;
    $word: (num: string | number | null) => string;
  }
}

export default boot(({ app }) => {
  app.config.globalProperties.$navTo = (url: string | null) => {
    if (!url) return;

    window.open(url, '_blank');
  };

  app.config.globalProperties.$word = (num: string | number | null) => {
    if (!num) return '';

    return converter.toOrdinal(+num);
  };
});
