export const useQDarkMode = createSharedComposable(() => {
  const q = useQuasar();
  let darkMode = $(useColorMode());

  if (darkMode === 'auto') {
    darkMode = 'dark';
  }

  const styles = {
    dark: '',
    light: '',
  };

  const toggleVars = () => {
    const document = useDocument();

    if (!document) return;

    const mode = darkMode === 'dark' ? 'dark' : 'light';
    const modeInverse = darkMode === 'dark' ? 'light' : 'dark';
    styles[mode] = document.body.getAttribute('style') || '';
    document.body.removeAttribute('style');
    document.body.setAttribute('style', styles[modeInverse]);
  };

  const setMode = () => {
    q.dark.set(darkMode === 'dark');
    toggleVars();
  };

  watch($$(darkMode), setMode);
  setMode();

  return $$(darkMode);
});
