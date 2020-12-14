request ``NET``
===============
Requires ``network`` permission.

`request` API is used to make network API calls. It returns a promise with network response as resultant value.

Syntax
++++++

.. code-block:: javascript

   request(options: object) : Promise<object>

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(() => {

      const NET = INKAPI.net;

      // making POST request

      const body = { someKey: "Some Data" }

      const options = {
        url: "https://some.api.here/posts",
        method: "POST",
        body: body,
        headers: {
          "content-type": "application/json"
        },
      };

      NET.request(options).then((data)=>{
        console.log(data);
      });
      

      // making GET request
      const options = {
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "GET",
      };

      NET.request(options).then((data)=>{
        console.log(data);
      });

    });

Parameters
++++++++++

+----------+-------------------+-----------------------------------------------------------------------+
| Name     | Type              | Description                                                           |
+==========+===================+=======================================================================+
| Options  | ``object``        | Required. Options object containing details about API call.           |
+----------+-------------------+-----------------------------------------------------------------------+

Options
+++++++

+----------+-------------------+-----------------------------------------------------------------------+
| Name     | Type              | Description                                                           |
+==========+===================+=======================================================================+
| url      | ``String``        | Required. API endpoint to make network calls.                         |
+----------+-------------------+-----------------------------------------------------------------------+
| method   | ``String``        | Type of operations to perform in API call . Defaults to `GET`.        |
+----------+-------------------+-----------------------------------------------------------------------+
| body     | ``object``        | Contains data to send from a client to the API.                       |
+----------+-------------------+-----------------------------------------------------------------------+
| headers  | ``object``        | Add headers to your API call.                                         |
+----------+-------------------+-----------------------------------------------------------------------+
