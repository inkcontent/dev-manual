loadText ``EDITOR``
===================

`loadText` API loads the text to any block using its path. If the block already have text it will be overwritten and if the block doesn't exist, new block will be created with the given text.

Syntax
++++++

.. code-block:: javascript

   loadText(text: String, path : Array<Number>)

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(() => {

      const EDITOR = INKAPI.editor;

      //Add or Overwrite the the text in block [2]. 
      EDITOR.loadText("Some Text Here", [2]);

    });

Parameters
++++++++++

+----------+-------------------+-----------------------------------------------------------------------+
| Name     | Type              | Description                                                           |
+==========+===================+=======================================================================+
| text     | ``String``        | Required. Text to be loaded.                                          |
+----------+-------------------+-----------------------------------------------------------------------+
| path     | ``Array<Number>`` | Required. Path of the block.                                          |
+----------+-------------------+-----------------------------------------------------------------------+

.. note::

   Learn more about how blocks work in INK editor `here <../../advanced/INK-Editor-Blocks-Architecture.html>`_.