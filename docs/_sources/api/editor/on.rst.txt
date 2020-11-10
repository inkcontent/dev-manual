on ``EDITOR``
=============

`on` API is used to attach event handler for a specific event.


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

eventHandler: ``function``

eventName: ``String``

Events
++++++

Following events are available for plugins to subscribe to;

``"contentChange"``
