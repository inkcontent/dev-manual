off ``EDITOR``
==============

`off` API is used to remove all event handlers for a specific event.


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

eventName: ``String``

Events
++++++

Following events are available for plugins to subscribe to;

``"contentChange"``
