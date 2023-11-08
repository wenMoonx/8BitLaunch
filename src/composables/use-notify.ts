import { QNotifyCreateOptions, Notify } from 'quasar';

export const useNotify = (type: 'positive' | 'negative', message: string) => {
  if (message && !message.endsWith('.') && !message.endsWith('!')) {
    message += '.';
  }

  const o: QNotifyCreateOptions = {
    classes: 'font-600',
    progress: true,
    color: type,
    position: 'top-right',
    icon:
      type === 'positive' ? 'i-uil-check-circle' : 'i-uil-exclamation-octagon',
    message,
    badgeStyle: { borderRadius: '4px' },
    badgeColor: type,
  };

  Notify.create(o);
};
