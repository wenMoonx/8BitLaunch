import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    canRecieveRealtime: false,
    confirmDialog: {
      show: false,
      title: '',
      messages: [] as string[],
      fn: (() => undefined) as () => void | Promise<void>,
    },
  }),
  getters: {},
  actions: {
    increment() {
      console.log();
    },
  },
});
