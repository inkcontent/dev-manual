getSelectedData ``EDITOR``
==========================

`getSelectedData` API extract the currently selected content from INK editor and returns related details.

Syntax
++++++

.. code-block:: javascript

   getSelectedData() : Promise<Object>

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const EDITOR = INKAPI.editor;

      EDITOR.getSelectedData().then(data => {

        console.log(data);
      
      });

      //Or use async/await

      const data = await EDITOR.getSelectedData();
      console.log(data);

      /*
        Console Output:

        {
          "offset": 3,
          "path": [1],
          "text": "content",
          "length": 7
        }

      */
      
    });
