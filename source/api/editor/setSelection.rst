setSelection ``EDITOR``
=======================

setSelection API can be used to select entire block using its path.


.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const EDITOR = INKAPI.editor;

      EDITOR.setSelection([2,1]);

    });

Parameters
++++++++++

path: ``Array<String>``

.. note::

   Learn more about how blocks work in INK editor `here <../../advanced/INK-Editor-Blocks-Architecture.html>`_.