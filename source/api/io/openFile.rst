openFile ``IO``
===============

`openFile` API is used to open and read files content from user disk. It opens a dialog box and prompts user to select a file or multiple files to open. 

Syntax
++++++

.. code-block:: javascript

   openFile(callback: function, options: object)

Example
+++++++

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

+--------------------+--------------------------+-----------------------------------------------------------------------+
| Name               | Type                     | Description                                                           |
+====================+==========================+=======================================================================+
| callback           | ``function``             | Required. callback to be triggered with opened file content.          |
+--------------------+--------------------------+-----------------------------------------------------------------------+
| options            | ``object``               | Required. Extension for save dialog filters.                          |
+--------------------+--------------------------+-----------------------------------------------------------------------+

options
+++++++

+------------------------+----------------------------+------------------------------------------------------------------------------+
| Name                   | Type                       | Description                                                                  |
+========================+============================+==============================================================================+
| ext                    | ``String | Array<String>`` | Extension filter for open dialog box.                                        |
+------------------------+----------------------------+------------------------------------------------------------------------------+
| allowMultipleFiles     | ``Boolean``                | If `true` user can select multiple files from open dialog box.               |
+------------------------+----------------------------+------------------------------------------------------------------------------+
