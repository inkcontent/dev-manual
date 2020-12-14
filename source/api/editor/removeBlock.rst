removeBlock ``EDITOR``
=======================

`removeBlock` API is used to remove any content block from the INK Editor. It takes `path` as a parameter and remove the corresponding block from the content.

Syntax
++++++

.. code-block:: javascript

   removeBlock(path : Array<Number>)

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(() => {

      const EDITOR = INKAPI.editor;

      const pathToRemove = [1];

      EDITOR.removeBlock(pathToRemove);
      
    });


Parameters
++++++++++

+----------+-------------------+-----------------------------------------------------------------------+
| Name     | Type              | Description                                                           |
+==========+===================+=======================================================================+
| path     | ``Array<Number>`` | Required. Path of the block to be removed.                            |
+----------+-------------------+-----------------------------------------------------------------------+

.. note::

   Learn more about how blocks work in INK editor `here <../../advanced/INK-Editor-Blocks-Architecture.html>`_.
