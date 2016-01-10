'use strict';

Package.describe({
  summary: '2D webGL renderer with canvas fallback',
  name: 'fds:pixijs',
  version: '3.0.9_1',
  documentation: 'README.md',
  git: 'https://github.com/foxdog-studios/meteor-pixijs.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.1');
  api.export('PIXI', 'client');
  api.addFiles(['lib/pixijs/bin/pixi.js', 'export-pixi.js'], 'client');
});

Package.onTest(function (api) {
  api.use('fds:pixijs')
});
