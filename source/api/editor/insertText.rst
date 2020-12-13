insertText ``EDITOR``
==========================

`insertText` API can be used to insert or replace text from any content block in the INK editor. 

Syntax
++++++

.. code-block:: javascript

   insertText(text: String, path: Array<Number>, offset: Number, length?: Number)

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(() => {

      const EDITOR = INKAPI.editor;

      //Add `Some Text` on block [2,1] after 10 character offset
      EDITOR.insertText("Some Text", [2, 1], 10); 

      //for replacing some text, provide length parameter too
      EDITOR.insertText("Some Text", [2, 1], 10, 6); 

      //above line will replace the next 6 characters with the provided text

    });


Parameters
++++++++++

+----------+-------------------+-----------------------------------------------------------------------+
| Name     | Type              | Description                                                           |
+==========+===================+=======================================================================+
| text     | ``String``        | Required. Text to be inserted.                                        |
+----------+-------------------+-----------------------------------------------------------------------+
| path     | ``Array<Number>`` | Required. Path of the block.                                          |
+----------+-------------------+-----------------------------------------------------------------------+
| offset   | ``Number``        | Required. Offset from start of block.                                 |
+----------+-------------------+-----------------------------------------------------------------------+
| length   | ``Number``        | length of text (characters) to replace                                |
+----------+-------------------+-----------------------------------------------------------------------+

.. note::

   Learn more about how blocks work in INK editor `here <../../advanced/INK-Editor-Blocks-Architecture.html>`_.