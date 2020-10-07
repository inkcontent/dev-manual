Debug Window
============

Debug Window is helpful for reading console logs from your plugin or to debug the plugin errors. To enable and display the debug window, you will have to launch the INK Application from terminal with some flags as follow:

For Mac Users:

.. code::

   > open <PATH TO INK.app> --args --debug-plugins
   
   for eg.
   
   > open /Applications/INK.app --args --debug-plugins

For Windows Users:

.. code::

   > <PATH TO INK.exe> --debug-plugins
   
   for eg.
   
   > "C:\Program Files (x86)\INK\INK.exe" --debug-plugins

For Linux Users:

.. code::

   > <Path to INK Executable> --debug-plugins
   
   for eg.
   
   > ./INK.AppImage --debug-plugins

.. warning::

   Do not close the `Debug Window` directly, instead exit the INK application and reopen normally. Closing the `Debug Window` will terminate all the plugin workers and all the plugin operations will shutdown.