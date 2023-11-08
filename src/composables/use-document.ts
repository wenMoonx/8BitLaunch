export const useDocument = () => (process.env.SERVER ? null : document);
