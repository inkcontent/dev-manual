Sidebar
=======

``Sidebar`` component creates a new sidebar on the left panel in INK editor. It takes a title and icon and creates sidebar accordingly.

Syntax
++++++

.. code-block:: javascript

   INKAPI.uiCreate({
    type: "Sidebar",
    sidebarTitle: String,
    icon: String,
   })

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

        
      */

    });