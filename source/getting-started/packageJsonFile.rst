Package File
============

The ``package.json`` file is one of the most important files for your plugin project. This is because it contains important information about your plugin. For example, a typical INK plugin ``package.json`` file looks like this:

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

As you can see, the above ``package.json`` file uses many standard package JSON fields as well as some custom fields that are essential for INK plugins. To ensure the INK Editor presents your plugin perfectly, it’s extremely important that you fill out all of the fields EXCEPT the ``id`` field (this action is prohibited).

.. warning::

  Modifying the ``id`` field in the ``inkplugin`` section of your ``package.json`` file is prohibited. This is because this field uniquely identifies your plugin and is used for operations like updating, activating, and deactivating the plugin. 