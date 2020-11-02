getHTML ``EDITOR``
==================

getHTML API extracts the content from the INK Editor and parse it into an HTML string as a resultant value.


.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const EDITOR = INKAPI.editor;

      EDITOR.getHTML().then(htmlStr => {

        console.log(htmlStr);
      
      })

      //Or use async/await

      const htmlStr = await EDITOR.getHTML(true); // receive images src in local source url
      console.log(htmlStr);
      
    });


Parameters
++++++++++

localImage: ``Boolean``

getHTML API provides html string with image src in base64 format, if passed ``true`` in parameter all images in html string will have local source url.