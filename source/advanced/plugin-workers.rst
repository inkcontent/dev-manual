Plugin Workers
==============

Each INK plugin runs on a separate worker using `Web Workers API <https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API>`_. This helps the INK application avoid any collisions or issues by keeping each plugin execution environment separate.

The INK software allows plugins to run on either ``Standard Worker`` or ``Module Worker``. Module Workers provide the ability to use the JavaScript ``import`` statement to import other modules. This sets Strict Mode as the default. Finally, it allows for top level declarations without polluting the worker’s global scope. 

To easily execute your plugin with Module Worker , use the ______ flag while creating your plugin project.

.. code::

  inkplugin create <your-plugin-name> --module-worker

If you choose this method, this action will create a ``module`` field with a `true` value under the ``inkplugin`` section in your ``package.json`` file. This indicates that your plugin will support ES6 modules and will be loaded in the Module Worker.
