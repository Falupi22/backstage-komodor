import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { komodorPlugin, KomodorPage } from '../src/plugin';

createDevApp()
  .registerPlugin(komodorPlugin)
  .addPage({
    element: <KomodorPage />,
    title: 'Root Page',
    path: '/komodor'
  })
  .render();
