export const useLoading = () => {
  const loading = ref(false);
  const withLoading = (fn: any, ...args: any[]) => {
    loading.value = true;
    fn(...args).finally(() => (loading.value = false));
  };
  return { loading, withLoading };
};
