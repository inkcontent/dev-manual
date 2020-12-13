loadHTML ``EDITOR``
===================

`loadHTML` API is used to load HTML string into INK Editor. It overwrites the current content in the Editor.

Syntax
++++++

.. code-block:: javascript

   loadHTML(html: String)

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(() => {

      const EDITOR = INKAPI.editor;

      EDITOR.loadHTML("<h1>This is my title</h1>");

    });

Parameters
++++++++++

+----------+-------------------+-----------------------------------------------------------------------+
| Name     | Type              | Description                                                           |
+==========+===================+=======================================================================+
| html     | ``String``        | Required. HTML string to be loaded in the Editor.                     |
+----------+-------------------+-----------------------------------------------------------------------+
