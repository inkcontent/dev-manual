loadText ``EDITOR``
===================

loadText API is used to load text to any block using its path.


.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(() => {

      const EDITOR = INKAPI.editor;

      EDITOR.loadText("Some Text Here", [2,1]);

    });

Parameters
++++++++++

Text: ``String``

path: ``Array<Number>``


.. note::

   Learn more about how blocks work in INK editor `here <../../advanced/INK-Editor-Blocks-Architecture.html>`_.