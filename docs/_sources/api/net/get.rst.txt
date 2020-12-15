get ``NET``
===========
Requires ``network`` permission. For more information click `here <../../advanced/permissions.html>`_.

`get` API is a shorthand way of making `GET` API calls.

Syntax
++++++

.. code-block:: javascript

   get(url: String, headers?: object) : Promise<object>

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(() => {

      const NET = INKAPI.net;      

      // making GET request

      NET.get("https://jsonplaceholder.typicode.com/posts/1").then((data)=>{
        console.log(data);
      });

    });

Parameters
++++++++++

+----------+-------------------+-----------------------------------------------------------------------+
| Name     | Type              | Description                                                           |
+==========+===================+=======================================================================+
| url      | ``String``        | Required. API endpoint to make network calls.                         |
+----------+-------------------+-----------------------------------------------------------------------+
| headers  | ``object``        | Add headers to your API call.                                         |
+----------+-------------------+-----------------------------------------------------------------------+
