import { boot } from 'quasar/wrappers';
import Sanitize from 'sanitize-html';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $sanitize: typeof Sanitize;
    $addBreaks: (dirty: string | null) => string;
  }
}

export default boot(({ app }) => {
  const overridenOptions = {
    allowedTags: ['br'],
  };

  app.config.globalProperties.$sanitize = function (dirty: string) {
    return Sanitize(dirty, overridenOptions);
  };

  app.config.globalProperties.$addBreaks = function (dirty: string | null) {
    if (!dirty) return '';

    return Sanitize(dirty.replaceAll('\n', '<br/>'), overridenOptions);
  };
});
