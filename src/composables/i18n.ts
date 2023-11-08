import { useI18n } from 'vue-i18n';

export const tt = (key: string) =>
  !process.env.SERVER
    ? useI18n().t(useRoute().name?.toString().replaceAll('-', '.') + '.' + key)
    : '';
