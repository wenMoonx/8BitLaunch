export const useConfirm = (
  {
    messages,
    title,
  }: {
    messages?: string | string[];
    title?: string;
  },
  fn: () => void
) => {
  const mainStore = useMainStore();

  mainStore.confirmDialog.title = title || '';
  if (typeof messages === 'string') {
    messages = [messages];
  }

  mainStore.confirmDialog.messages = messages || [];
  mainStore.confirmDialog.fn = fn;
  mainStore.confirmDialog.show = true;
};
