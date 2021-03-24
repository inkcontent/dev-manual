getHTML ``EDITOR``
==================

`getHTML` API extracts the content from the INK Editor and parse it into an HTML string as a resultant value.

Syntax
++++++

.. code-block:: javascript

   getHTML(localImages? : Boolean) : Promise<String>

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const EDITOR = INKAPI.editor;

      EDITOR.getHTML().then(htmlStr => {

        console.log(htmlStr);
      
      });

      //Or use async/await

      const htmlStr = await EDITOR.getHTML(true); // receive images src in local source url
      console.log(htmlStr);
      
      /*
        Console Output:

        <!DOCTYPE html>
        <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
          <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta http-equiv="X-UA-Compatible" content="ie=edge" />
              <meta name="generator" content="INK" />
              <meta name="description" content="" />
              <title>My Title</title>
          </head>
          <body>
            <h1 style="text-align: left">My Title</h1>
            <p style="text-align: left">My content here!...</p>
          </body>
        </html>

      */

    });


Parameters
++++++++++

+--------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Name         | Type        | Description                                                                                                                                                   |
+==============+=============+===============================================================================================================================================================+
| localImages? | ``Boolean`` | getHTML API provides html string with image src in base64 format, if passed ``true`` in parameter all images in html string will have local source url.       |
+--------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
