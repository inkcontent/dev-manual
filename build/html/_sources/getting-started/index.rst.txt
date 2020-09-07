Introduction
============

INK plugin is a piece of software containing a group of functions that can extend the core functionality of INK Editor. INK Plugins are written with pure vanilla JavaScript and they make use of INK APIs for building functionality on top of what INK Editor already offers.

INK Plugins allows you to greatly extend and expand the functionality of INK Editor. INK plugin can be as simple or as complicated as per your needs. 

Quick Start
===========

To quickly get started creating INK plugins, follow the steps below.

#. Install INK CLI tool ``inkplugin`` globally using ``npm install -g inkplugin``
#. Create INK Plugin project using ``inkplugin generate <your-project-name>``
#. Start writing your plugin code in the ``main.js`` using INK APIs_.

.. note:: 

    Under ``engines`` section in ``package.json``, cli tool will automatically add the latest version for INK Editor support. you can change it as per your needs.

In its simplest form, the plugin main entry JS file looks like this.

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

.. note::

    - More on INK API Namespaces in APIs_ section.
    - More on INK CLI Tool in Command_ `Line Tools`__ section.


.. _Command: /cli

__ Command_

.. _APIs: /api
