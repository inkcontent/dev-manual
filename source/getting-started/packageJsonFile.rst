Package JSON File
=================

The ``package.json`` file is one of the most important file in the plugin project as it contains some important information regarding your plugin. A typical INK plugin ``package.json`` file looks like this.

.. code:: json

  {
    "name": "plugin-project-name",
    "version": "1.1.0",
    "homepage": "https://plugin-website.com",
    "description": "Plugin Description",
    "main": "src/main.js",
    "author": "Plugin Author",
    "license": "ISC",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "inkplugin": {
      "id": "a07fb265-20lb-4ae5-9762-e3a6d58be13e",
      "title": "Plugin Title",
      "icon": "sample.png",
      "readme": "readme.md"
    },
    "engines": {
      "ink": "^2.0.0"
    }
  }

You can see in the above package.json file we make use of a lot of standard package json fields and some custom fields that are essential for INK plugin. It is important that you fill all of the fields, except ``id`` field (it is prohibited), so that INK editor can present your plugin perfectly.

.. warning::

  It is prohibited to modify the ``id`` field in ``inkplugin`` section of your package.json file. This field uniquely identifies your plugin and it is used in operations like updating/activating/deactivating plugin.