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

  >  inkplugin create <Project Name>


It will create directory named ``ink-plugin`` in current directory ``./``, if name (or path) is not provided.

The above command will create a following project structure.

.. code::

  ├── ink-plugin
     ├── inkapi.js
     ├── main.js
     ├── package.json

.. warning::

    It is strictly recommended to always keep ``inkapi.js`` in root directory of your project.

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