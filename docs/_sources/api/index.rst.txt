INK APIs Intro
==============

The INK Editor provides some of its core functions for developers to use. This makes it possible for plugins to safely interact with the INK Editor’s core. These functions are divided into namespaces according to their functionalities. All of these functions combine to form the INK APIs. 

INK APIs are available through ``inkapi.js`` for every plugin. This file is mandatory for plugin projects.

.. note::

    Each INK API function will return a promise with a resultant value (if applicable).