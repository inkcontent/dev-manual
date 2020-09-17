INK CLI Usage
=============


Installation:
+++++++++++++++++++

using npm

.. code::

  >  npm install -g inkplugin 

or using yarn

.. code::

  >  yarn global add inkplugin 

Create INK plugin project: 
++++++++++++++++++++++++++++

To create INK plugin project you can simply use ``create`` command with the name (or path) for the plugin project.

.. code::

  >  inkplugin create <Path or Project Name>

The above command will create a following project structure.

.. code::

  ├── ink-plugin
     ├── inkapi.js
     ├── main.js
     ├── package.json
     ├── readme.md
     ├── sample.png

You can also enable ES6 modules support for your plugin by using ``--module-worker`` flag while creating the project. More information about module workers here_.

.. warning::

    It is mandatory to always keep ``inkapi.js`` in root directory of your project. ``inkapi`` ensures the right communication between the plugin context and INK editor context. While plugin installation, INK editor expects the ``inkapi.js`` to be present in the root directory of your project.

Package INK plugin project: 
+++++++++++++++++++++++++++

To package INK plugin you can use ``package`` command with the path to the project directory.

.. code::

  >  inkplugin package <Project Path>

It will package current directory ``./``, if no path is provided.

The above command will create a packaged plugin file in project root directory. which can be used to install your plugin in INK editor.

.. note::

    Before packaging, make sure your project meets the following requirements.

    * Project root directory must contain a package.json file.
    * Project root directory must contain a inkapi.js file.
    * package.json ``main`` field should point towards the entry js file.


.. _here: ../advanced/plugin-workers.html