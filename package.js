'use strict';

Package.describe({
  summary: '2D webGL renderer with canvas fallback',
  name: 'fds:pixijs',
  version: '1.5.1_1',
  git: 'https://github.com/foxdog-studios/meteor-pixijs.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.export('PIXI', 'client');
  api.addFiles(['lib/pixijs/bin/pixi.js', 'export-pixi.js'], 'client');
});

Package.onTest(function (api) {
  api.use('fds:pixijs');
});

