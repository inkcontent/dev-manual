Plugin Workers
==============

Each plugin in INK runs on a separate worker using `Web Workers API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API>`_. This helps INK to keep each plugin execution environment separate and avoid any sort of collisions. 

INK allows plugins to run on either ``Standard Worker`` or ``Module Worker``. The module workers provides the ability to use the JavaScript ``import`` statement to import other modules; strict mode by default; and top-level declarations not polluting the worker's global scope.

You can simply choose to execute your plugin in module worker by using ``--module-worker`` flag while creating your plugin project.

.. code::

  inkplugin create <your-plugin-name> --module-worker

This will create a ``module`` field with `true` value under ``inkplugin`` section in your package.json file indicating that your plugin will support ES6 modules and will be loaded in module worker.
