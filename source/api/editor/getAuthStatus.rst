getAuthStatus ``EDITOR``
========================

`getAuthStatus` API returns the current authentication status of the INK editor.

Syntax
++++++

.. code-block:: javascript

   getAuthStatus() : Promise<Object>

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const EDITOR = INKAPI.editor;

      EDITOR.getAuthStatus().then(authInfo => {

        console.log(authInfo);
      
      });

      //Or use async/await

      const authInfo = await EDITOR.getAuthStatus(); 
      console.log(authInfo);
      
      /*
        Console Output:

        {
          logged: true
        }

      */

    });