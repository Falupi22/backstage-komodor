import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const komodorPlugin = createPlugin({
  id: 'komodor',
  routes: {
    root: rootRouteRef,
  },
});

export const KomodorPage = komodorPlugin.provide(
  createRoutableExtension({
    name: 'KomodorPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
