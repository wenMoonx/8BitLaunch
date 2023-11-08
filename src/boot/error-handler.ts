import { boot } from 'quasar/wrappers';

export default boot(({ app }) => {
  app.config.errorHandler = (error, _, info) => {
    console.error('GLOBAL ERROR HANDLER CAUGHT: ', error);
    const errorTyped = error as Error | undefined;
    let errMessage = errorTyped?.message || (errorTyped as unknown as string);
    if (
      errorTyped &&
      (errorTyped as any).response &&
      (errorTyped as any).response.data
    ) {
      errMessage = (errorTyped as any).response.data.err;
    }

    if (errMessage?.includes && errMessage?.includes('user rejected')) {
      errMessage = 'User rejeceted signing a message';
    }

    useNotify('negative', Q.format.capitalize(errMessage || 'Error happened!'));
  };
});
