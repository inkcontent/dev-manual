insertTextAtCursor ``EDITOR``
=============================

`insertTextAtCursor` API is used to insert text content into your INK editor content at the position of the cursor.

Syntax
++++++

.. code-block:: javascript

   insertTextAtCursor(content: String, type?: String) : Promise<void>

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const EDITOR = INKAPI.editor;

      const content = "This is a sample content.";

      EDITOR.insertTextAtCursor(content); // type is default to "paragraph"

    });


Parameters
++++++++++

+----------+-------------------+---------------------------------------------------------------------------------------------------------+
| Name     | Type              | Description                                                                                             |
+==========+===================+=========================================================================================================+
| content  | ``String``        | Text content to be inserted at cursor position.                                                         |
+----------+-------------------+---------------------------------------------------------------------------------------------------------+
| type?    | ``String``        | Type of content. valid types are ``paragraph``, ``heading-two``, ``heading-three`` and ``heading-four`` |
+----------+-------------------+---------------------------------------------------------------------------------------------------------+
