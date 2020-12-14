saveFile ``IO``
===============

`saveFile` API is used to write content on user disk. It opens a dialog box and prompts user to select a location for content to save with a defined extension. 

Syntax
++++++

.. code-block:: javascript

   saveFile(content: String | ArrayBuffer, extension: String)

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(() => {

      const IO = INKAPI.io;

      const content = "This is some content"

      IO.saveFile(content, 'txt');  //open save dialog with txt file extension
      
    });

Parameters
++++++++++

+--------------------+--------------------------+-----------------------------------------------------------------------+
| Name               | Type                     | Description                                                           |
+====================+==========================+=======================================================================+
| content            | ``String | ArrayBuffer`` | Required. Content to write on disk.                                   |
+--------------------+--------------------------+-----------------------------------------------------------------------+
| extension          | ``String``               | Required. Extension for save dialog filters.                          |
+--------------------+--------------------------+-----------------------------------------------------------------------+
