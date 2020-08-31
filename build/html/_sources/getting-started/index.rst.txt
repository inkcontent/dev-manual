Introduction
============

INK plugin is a piece of software containing a group of functions that can extend the core functionality of INK Editor. INK Plugins are written with pure vanilla JavaScript and they make use of INK APIs for building functionality on top of what INK Editor already offers.

INK Plugins allows you to greatly extend and expand the functionality of INK Editor. INK plugin can be as simple or as complicated as per your needs. 

Quick Start
===========

To get started creating an INK plugin, follow the steps below.

#. Initialize NPM project in a directory using ``npm init -y``
#. Create an entry js file (Make sure package.json file's ``main`` field points toward this file)
#. Copy the ``ink-api.js`` file to the root directory. (This file can be downloaded from <<TBD>>)

.. note:: 

    Include INK Editor version, you want your plugin to support in ``package.json`` under ``engines > ink``

In its simplest form, the plugin entry JS file looks like this.

.. code:: js

  import INKAPI from './inkapi.js'
  
  INKAPI.ready(() => {
    const UI= INKAPI.ui;
    const IO= INKAPI.io;
    const Editor= INKAPI.editor;
    
    //your code here

    console.log("Hello, INK Plugin World!");

  });

In the above example, we are importing ``INKAPI`` and making use of its ready function that takes a callback function. This helps us initiate our plugin code once the INK APIs are ready to use. Also you can see some api namespaces that are available through INKAPI. 

You can do all of the above using INK cli tool.

.. code::

  ink-cli generate my-plugin

.. note::

    - More on INK API Namespaces in APIs_ section.
    - More on INK CLI Tool in Command_ `Line Tools`__ section.


.. _Command: /cli

__ Command_

.. _APIs: /api


