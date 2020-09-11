INK APIs Introduction
=====================

INK Editor provides some functions from its core for plugin developers to use, allowing plugins to interact with INK Editor core safely and making interactions possible. These functions are divided into namespaces according to their functionalities and all of them combines to form INK APIs. 

INK APIs are available for every plugin through ``inkapi.js`` file, which is mandatory file for plugin project.

.. note::

    Each INK API function will return a promise with a resultant value (if applicable).