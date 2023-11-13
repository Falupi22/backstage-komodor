import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const komodorBackendPlugin = createPlugin({
  id: 'komodor-backend',
  routes: {
    root: rootRouteRef,
  },
});

export const KomodorBackendPage = komodorBackendPlugin.provide(
  createRoutableExtension({
    name: 'KomodorBackendPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
