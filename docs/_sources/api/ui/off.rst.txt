off ``UI``
==========

`off` API is used to remove all event handlers for a specific event.

Syntax
++++++

.. code-block:: javascript

   off(event : String)

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const UI = INKAPI.ui;

      //removing event handlers
      UI.off("contentChange")
      
    });

Parameters
++++++++++

+----------+--------------+-----------------------------------------------------------------------+
| Name     | Type         | Description                                                           |
+==========+==============+=======================================================================+
| event    | ``String``   | Required. A String that specifies the name of the event.              |
+----------+--------------+-----------------------------------------------------------------------+


Events
++++++

Following events are available for plugins to subscribe to;

+---------------+---------------------------------------------------------------------------------------+
| Event         | Description                                                                           |
+===============+=======================================================================================+
| contentChange | This event is triggered every time the INK editor content is changed.                 |
+---------------+---------------------------------------------------------------------------------------+
| themeSwitch   | This event is triggered when user switch the theme or selects a theme modifier.       |
+---------------+---------------------------------------------------------------------------------------+
