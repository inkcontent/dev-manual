saveFile ``IO``
===============

saveFile API is used to write content on user disk. It opens a dialog box and prompts user to select a location for content to save with a defined extension. 


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

``content``: String | ArrayBuffer

First parameter will accept content in the form of either ``String`` or an ``ArrayBuffer``.

``Extension``: String

Second parameter will accept the extension filter that you want for your file.
