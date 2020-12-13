setSelection ``EDITOR``
=======================

`setSelection` API can be used to apply cursor selection on any content block using its path.

Syntax
++++++

.. code-block:: javascript

   setSelection(path : Array<Number>)

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const EDITOR = INKAPI.editor;

      EDITOR.setSelection([2,1]);

    });

Parameters
++++++++++

+----------+-------------------+-----------------------------------------------------------------------+
| Name     | Type              | Description                                                           |
+==========+===================+=======================================================================+
| path     | ``Array<Number>`` | Required. Path of the block to be selected.                           |
+----------+-------------------+-----------------------------------------------------------------------+

.. note::

   Learn more about how blocks work in INK editor `here <../../advanced/INK-Editor-Blocks-Architecture.html>`_.