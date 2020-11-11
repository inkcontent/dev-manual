getAllBlocks ``EDITOR``
=======================

getAllBlocks API extracts the content from the INK Editor in the blocks format.

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const EDITOR = INKAPI.editor;

      EDITOR.getAllBlocks().then(blocks => {

        console.log(blocks);
      
      })

      //Or use async/await

      const blocks = await EDITOR.getAllBlocks();
      console.log(blocks);
      
    });

.. note::

   Learn more about how blocks work in INK editor `here </advanced/INK-Editor-Blocks-Architecture.html>`_.