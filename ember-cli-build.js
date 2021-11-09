'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    minifyCSS: {
      enabled: false,
    },
    'ember-prism': {
      components: ['bash', 'javascript', 'handlebars', 'markup-templating'],
      plugins: ['line-highlight'],
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app, {
    compatAdapters: new Map([['ember-get-config', null]]),
    // Needed for IE11 https://github.com/embroider-build/embroider/issues/731
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
  });
};
