associateFileType ``IO``
========================

`associateFileType` API is used to register filetype association with your plugin callback handler. This handler will be triggered every time this file type is loaded in INK editor. This will also allow users to select the associated file types in open file dialog.

Syntax
++++++

.. code-block:: javascript

   associateFileType(triggerCB: function, extension: String)

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const IO = INKAPI.io;

      const docxFileHandler = (data) => {
        console.log(data);
      }

      //Associating docx filetype with this plugin handler
      IO.associateFileType(docxFileHandler, "docx");


      /*
        Console Output when associated file is triggered:

        [
          {
            path: "C:\Users\Me\sample.docx", 
            filename: : "sample.docx",
            data: Uint8Array(11434) [ ... ] 
          }
        ]

      */


    });


Parameters
++++++++++

+--------------------+--------------------------+-------------------------------------------------------------------------------------+
| Name               | Type                     | Description                                                                         |
+====================+==========================+=====================================================================================+
| triggerCB          | ``function``             | Required. Callback to trigger when associated file type gets loaded in INK editor.  |
+--------------------+--------------------------+-------------------------------------------------------------------------------------+
| extension          | ``String``               | Required. Extension to associate with.                                              |
+--------------------+--------------------------+-------------------------------------------------------------------------------------+
