INK CLI Usage
=============


Installing the INK CLI:
+++++++++++++++++++++++

Install the INK CLI using npm:

.. code::

  >  npm install -g inkplugin 

Or, using yarn:

.. code::

  >  yarn global add inkplugin 

Creating Your INK Plugin Project: 
+++++++++++++++++++++++++++++++++

To start creating your INK plugin project, simply use the ``create`` command with the name (or path) for the given plugin project:

.. code::

  >  inkplugin create <Path or Project Name>

The above command will create the following project structure:

.. code::

  ├── ink-plugin
     ├── inkapi.js
     ├── main.js
     ├── package.json
     ├── readme.md
     ├── sample.png

Furthermore, you can also enable ES6 Modules support for your plugin by using the ``--module-worker`` flag when you create the project. Learn more about this method and using Module Workers here_. 

.. warning::

    It’s mandatory to always keep ``inkapi.js`` in the root directory of your plugin project. This is because ``inkapi.js`` ensures that the plugin context and the INK Editor context communicate correctly with one another, avoiding any conflicts or errors. As a result, the INK Editor software expects the ``inkapi.js`` to be present in the root directory of your plugin project. 

Packaging Your INK Plugin Project: 
++++++++++++++++++++++++++++++++++

To package your INK plugin, use the ``package`` command and set the path to the project directory as follows: 

.. code::

  >  inkplugin package <Project Path>

The above command will create a packaged plugin file in the project root directory. You can use this packaged file to install your plugin in the INK Editor.

If no path is provided, it’s important to note that this will package the current directory ``./``.

.. note::

    Before packaging, make sure your plugin project meets the following requirements:

    * Project root directory must contain a ``package.json`` file.
    * Project root directory must contain an ``inkapi.js`` file.
    * Package.json ``main`` field points toward the entry js file.


.. _here: ../advanced/plugin-workers.html