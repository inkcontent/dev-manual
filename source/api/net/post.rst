post ``NET``
===========
Requires ``network`` permission. For more information click `here <../../advanced/permissions.html>`_.

`post` API is a shorthand way of making `POST` API calls.

Syntax
++++++

.. code-block:: javascript

   post(url: String, body: object, headers?: object) : Promise<object>

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(() => {

      const NET = INKAPI.net;      

      // making POST request

      const body = { someKey: "Some Data" }

      NET.post("https://jsonplaceholder.typicode.com/posts/1", body)
        .then((data)=>{
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
| body     | ``object``        | Required. Contains data to send from a client to the API.             |
+----------+-------------------+-----------------------------------------------------------------------+
| headers  | ``object``        | Add headers to your API call.                                         |
+----------+-------------------+-----------------------------------------------------------------------+
