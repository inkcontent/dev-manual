loadHTML ``EDITOR``
===================

loadHTML API is used to load HTML string into INK Editor.


.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(() => {

      const EDITOR = INKAPI.editor;

      EDITOR.loadHTML("<h1>This is my title</h1");

    });

Parameters
++++++++++

HTML String: ``String``
