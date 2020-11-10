getSelectedData ``EDITOR``
==========================

getSelectedData API provides data about the selected content in the INK Editor.


.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const EDITOR = INKAPI.editor;

      EDITOR.getSelectedData().then(data => {

        console.log(data);
      
      })

      //Or use async/await

      const data = await EDITOR.getSelectedData();
      console.log(data);
      
    });
