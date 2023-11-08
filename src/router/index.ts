import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import generatedRoutes from '~pages';
import { setupLayouts } from 'layouts-generated';

const routes = setupLayouts(generatedRoutes);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  const wait = (ms: number) =>
    new Promise((r) =>
      setTimeout(() => {
        r(null);
      }, ms)
    );

  function preloadAsyncRoutes() {
    // iterate all routes and if the component is async - prefetch it!
    setTimeout(async () => {
      for (const route of router.getRoutes()) {
        if (!route.components) continue;

        // most routes have just a "default" component unless named views are used - iterate all entries just in case
        for (const componentOrImporter of Object.values(route.components)) {
          if (typeof componentOrImporter === 'function') {
            try {
              // prefetch the component and throttle 10ms
              const loader = componentOrImporter as () => void;
              loader();
              await wait(10);
            } catch (err) {
              // ignore failing requests
            }
          }
        }
      }
    }, 300);
  }

  if (!process.env.SERVER) window.addEventListener('load', preloadAsyncRoutes);

  return router;
});
