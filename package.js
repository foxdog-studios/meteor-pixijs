'use strict';

Package.describe({
  summary: '2D webGL renderer with canvas fallback',
  name: 'fds:pixijs',
  version: '3.0.6',
  documentation: 'README.md',
  git: 'https://github.com/foxdog-studios/meteor-pixijs.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.export('PIXI', 'client');
  api.addFiles(['lib/pixijs/bin/pixi.js', 'export-pixi.js'], 'client');
});

Package.onTest(function (api) {
  api.use('fds:pixijs')
});
