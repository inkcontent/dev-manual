associateFileType ``IO``
========================

associateFileType API is used to register filetype association with your plugin callback handler. This handler will be triggered every time this file type is loaded in INK editor. 

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

    });


Parameters
++++++++++

callback: ``function``

extension: ``String``
