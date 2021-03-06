off ``EDITOR``
==============

`off` API is used to remove all event handlers for a specific event.

.. warning::
  This API will be deprecated soon. Use `UI.off <../ui/off.html>`_ here instead.


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

      const EDITOR = INKAPI.editor;

      //removing event handlers
      EDITOR.off("contentChange")
      
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

``"contentChange"``
