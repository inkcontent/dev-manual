on ``UI``
=========

`on` API is used to register event listener for a specific event.

Syntax
++++++

.. code-block:: javascript

   on(listener : function, event : String)

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const UI = INKAPI.ui;

      const contentChangeHandler = (data) => {
        console.log(data);
      }

      //subscribing to an event with event handler
      UI.on(contentChangeHandler, "contentChange")
      
    });

Parameters
++++++++++

+----------+--------------+-----------------------------------------------------------------------+
| Name     | Type         | Description                                                           |
+==========+==============+=======================================================================+
| listener | ``function`` | Required. Specifies the function to run when the event occurs.        |
+----------+--------------+-----------------------------------------------------------------------+
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
