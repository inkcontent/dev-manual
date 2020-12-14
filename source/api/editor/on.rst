on ``EDITOR``
=============

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

      const EDITOR = INKAPI.editor;

      const contentChangeHandler = (data) => {
        console.log(data);
      }

      //subscribing to an event with event handler
      EDITOR.on(contentChangeHandler, "contentChange")
      
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

``"contentChange"``
