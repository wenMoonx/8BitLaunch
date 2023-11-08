type FilterOperator =
  | 'eq'
  | 'neq'
  | 'gt'
  | 'gte'
  | 'lt'
  | 'lte'
  | 'like'
  | 'ilike'
  | 'is'
  | 'in'
  | 'cs'
  | 'cd'
  | 'sl'
  | 'sr'
  | 'nxl'
  | 'nxr'
  | 'adj'
  | 'ov'
  | 'fts'
  | 'plfts'
  | 'phfts'
  | 'wfts';

export const usePageFetch = async <T>(
  store: {
    $id: string;
    pageData: unknown[] | undefined;
  },
  options?: {
    filter?: [keyof T | '', FilterOperator | '', string];
    skipLoading?: boolean;
    select?: string;
    ascending?: boolean;
  }
) => {
  if (!store.pageData)
    throw new Error(
      'Non compliant store for usePageFetch. Please provide "pageData" in state.'
    );

  async function reload() {
    store.pageData = [];
  }

  async function pull() {
    if (options?.skipLoading) {
      if (!store.pageData?.length) await reload();
      else reload();
    } else {
      await reload();
    }
  }

  await pull();

  return { reload };
};
