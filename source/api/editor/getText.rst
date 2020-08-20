getText ``EDITOR``
==================

getText API extracts the content from the INK Editor and parse it into plain text string as a resultant value.


.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const EDITOR = INKAPI.editor;

      EDITOR.getText().then(text => {

        console.log(text);
      
      })

      //Or use async/await

      const text = await EDITOR.getText();
      console.log(text);
      
    });
