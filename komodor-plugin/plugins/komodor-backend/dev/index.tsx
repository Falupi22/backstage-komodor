import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { komodorBackendPlugin, KomodorBackendPage } from '../src/plugin';

createDevApp()
  .registerPlugin(komodorBackendPlugin)
  .addPage({
    element: <KomodorBackendPage />,
    title: 'Root Page',
    path: '/komodor-backend'
  })
  .render();
