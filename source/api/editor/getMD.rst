getMD ``EDITOR``
==================

`getMD` API extracts the content from the INK Editor and parse it into Markdown format string as a resultant value.

Syntax
++++++

.. code-block:: javascript

   getMD() : Promise<String>

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const EDITOR = INKAPI.editor;

      EDITOR.getMD().then(mdStr => {
        console.log(mdStr);
      })

      //Or use async/await

      const mdStr = await EDITOR.getMD();
      console.log(mdStr);
      
    });
