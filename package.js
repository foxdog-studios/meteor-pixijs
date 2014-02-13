Package.describe({
  summary: 'Super fast HTML 5 2D rendering engine that uses webGL with canvas fallback'
});

Package.on_use(function (api, where) {
  if(api.export) {
    api.export('PIXI');
  }
  api.add_files('lib/pixijs/bin/pixi.js', ['client']);
  api.add_files('export-pixi.js', ['client']);
});

