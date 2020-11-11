insertText ``EDITOR``
==========================

insertText API can be used to insert or replace text in the INK editor. 


.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(() => {

      const EDITOR = INKAPI.editor;

      // EDITOR.insertText(text, path, offset, length?)
      EDITOR.insertText("Some Text", [2, 1], 10); //Add `Some Text` on block [2,1] after 10 character offset

      //for replacing some text, provide length parameter too
      EDITOR.insertText("Some Text", [2, 1], 10, 6); 

      //above line will replace the next 6 charaters with the provided text

    });


Parameters
++++++++++

text: ``String``

path: ``Array<Number>``

offset: ``Number``

length?: ``Number``

.. note::

   Learn more about how blocks work in INK editor `here <../../advanced/INK-Editor-Blocks-Architecture.html>`_.