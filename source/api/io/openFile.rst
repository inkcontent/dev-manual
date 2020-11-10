openFile ``IO``
===============

openFile API is used to open and read files content from user disk. It opens a dialog box and prompts user to select a file or multiple files to open. 


.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const IO = INKAPI.io;

      //open dialog with docx file extension
      IO.openFile({ ext: "docx", allowMultipleFiles: false })
        .then((data) => {
          console.log(data);
        });
      

      //Or use async/await

      const data = await IO.openFile({ ext: "docx", allowMultipleFiles: false });
      console.log(data);


    });


Parameters
++++++++++

options: ``{ ext: String | Array<String>, allowMultipleFiles: Boolean }``