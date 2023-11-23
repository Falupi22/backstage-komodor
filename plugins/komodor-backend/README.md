# Komodor Backend Plugin

Welcome to the Komodor backend plugin!

_This plugin was created through the Backstage CLI_

# Setup & Configuration

This plugin must be explicitly added to a Backstage app, along with it's peer front end plugin. The front end plugin should also be properly configured, as described in the README file of it. Kubernetes plugin must be added in order to use its functionality (front and back).

It requires configuration in the Backstage `app-config.yaml` to connect to a Komodor agent. For local development, you might configure `app-config.local.yaml` instead.
If you run the frontend and the backend projects from different processes, only the configuration file of the backend should be configured. Kubernetes plugin should also be
configured if k8s clusters are used by Komodor plugin.

Example:

````yaml
komodor:
  url: http://localhost:7008
  apiKey: '90890-dda2d-32acb-efad8'
````

`url`

The URL of the Komodor service.

`apiKey`

The API key used for accessing the Komodor service.

`cache` (optional)

- `shouldFetch`: Should data be fetched from the cache each client request, if
  already exists. Default is false.
- `shouldUpdate`: Should the cache be updated constantly by long polling. Default is false.

In addition, configuration of an entity's `catalog-info.yaml` helps identify which specific Komodor object(s) should be presented on a specific entity catalog page.
Specifically you might add the reference to this file to the `app.config.yaml` file,
by adding it to the `catalog.locations` field.

An example of such file can be found in `plugins/komodor-backend/examples/`.

For more information, see the [formal documentation about the Kubernetes feature in Backstage](https://backstage.io/docs/features/kubernetes/overview).

## Getting started

In order to run the full system, run `yarn dev` from the root directory.
In order to run the front end only, run `yarn start`.
In order to run the back end only, run `yarn start-backend`.

For testing without a Komodor service runnin, you might run
`node plugins/komodor-backend/src/service/komodorAgentMock/komodorServiceMock.ts`.
