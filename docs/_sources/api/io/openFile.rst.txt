openFile ``IO``
===============

openFile API is used to open and read files content from user disk. It opens a dialog box and prompts user to select a file or multiple files to open. 


.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(() => {

      const IO = INKAPI.io;

      //open dialog with txt file

      const callback = (data) => console.log(data);

      IO.openFile(callback, { ext: "txt", allowMultipleFiles: false })      

    });


Parameters
++++++++++

callback: ``function``

options: ``{ ext: String | Array<String>, allowMultipleFiles: Boolean }``
