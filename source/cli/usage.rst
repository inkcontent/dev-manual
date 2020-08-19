CLI Usage
=========


Installation: 
+++++++++++++

using npm

.. code::

  >  npm install -g ink-cli 

or using yarn

.. code::

  >  yarn global add ink-cli 

Generate INK plugin project: 
++++++++++++++++++++++++++++

To generate INK plugin project you can simply use ``generate`` command with the name (or path) for the plugin project.

.. code::

  >  ink-cli generate <Project Name>


It will create directory named ``ink-plugin`` in current directory ``./``, if name (or path) is not provided.

The above command will create a following project structure.

.. code::

  ├── ink-plugin
     ├── ink-api.js
     ├── main.js
     ├── package.json

.. warning::

    It is strictly recommended to always keep ``ink-api.js`` in root directory of your project.

Package INK plugin project: 
+++++++++++++++++++++++++++

To package INK plugin you can use ``package`` command with the path to the project directory.

.. code::

  >  ink-cli package <Project Path>

It will package current directory ``./``, if no path is provided.

The above command will create a packaged plugin file in project root directory. which can be used to install your plugin in INK editor.

.. note::

    Before packaging, make sure your project meets the following requirements.

    * Project root directory must contain a package.json file.
    * Project root directory must contain a ink-api.js file.
    * package.json ``main`` field should point towards the entry js file.