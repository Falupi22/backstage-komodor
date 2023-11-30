# Komodor Plugin

<img src="./plugins/komodor/src/assets/screenshot_normal.png">

## Setup

1. Run:

```bash
# From your Backstage root directory
yarn --cwd packages/app add @falupi22/plugin-komodor
yarn --cwd packages/backend add @falupi22/plugin-komodor-backend
yarn --cwd packages/app add @backstage/plugin-kubernetes
yarn --cwd packages/backend add @backstage/plugin-kubernetes-backend
```

2. Add the plugin backend:

In a new file named `komodor.ts` under `backend/src/plugins`:

```js
import { createRouter } from '@falupi22/plugin-komodor-backend';
import { Router } from 'express';
import { PluginEnvironment } from '../types';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  return await createRouter({
    logger: env.logger,
    config: env.config,
  });
}
```

And then add to `packages/backend/src/index.ts`:

```js
// In packages/backend/src/index.ts
import komodor from './plugins/komodor';
// ...
async function main() {
  // ...
  const komodorEnv = useHotMemoize(module, () => createEnv('komodor'));
  // ...
  apiRouter.use('/komodor', await komodor(komodorEnv));
```

3. Add the plugin as a tab to your service entities:

```jsx
// In packages/app/src/components/catalog/EntityPage.tsx
import { EntityKomodorContent } from '@falupi22/plugin-komodor';

const serviceEntityPage = (
  <EntityLayout>
    {/* other tabs... */}
    <EntityLayout.Route path="/komodor" title="Komodor">
      <EntityKomodorContent />
    </EntityLayout.Route>
```
4. Follow the instructions for [kubernetes plugin setup](https://backstage.io/docs/features/kubernetes/installation) (notice that the installation of it has already been done). You don't have to make the plugin appear in the UI in order to make this plugin work.

4. Follow the backend instructions which can be found in the README file of the backend project.

## Run

In order to run the full system, run `yarn dev` from the root directory.
In order to run the front end only, run `yarn start`.
In order to run the back end only, run `yarn start-backend`.
