insertBlock ``EDITOR``
======================

`insertBlock` API is used to insert a block of content into INK editor. A block can be a paragraph, heading, lists, links, etc.

Syntax
++++++

.. code-block:: javascript

   insertBlock({ type: String, children: Array<Object> } , path? : Array<Number>)

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const EDITOR = INKAPI.editor;

      /*
        Following will insert a simple paragraph block with text "this is text" 
        at the location of cursor as no path is given.
      */
      EDITOR.insertBlock({ 
        type: "paragraph", 
        children: [{ text: "this is text" }], 
      });


      /*
        Following will create a bullet points list with two list items 
        "one" and "two".
      */
      EDITOR.insertBlock({
        type: "bulleted-list",
        children: [
          { type: "list-item", children: [{ text: "one" }]},
          { type: "list-item", children: [{ text: "two" }]},
        ]
      });
      
      
      /*
        Following will create a link
      */
      EDITOR.insertBlock({
        type: 'link',
        href: 'https://xyz.com',
        children: [{ text: 'my link' }], 
      });


      /*
        We can use above examples together too.. 
        by creating a paragraph having link in between
      */ 
      EDITOR.insertBlock({
        type: 'paragraph',
        children: [
          { text: 'For more info check ' },
          { type: 'link', href: 'https://xyz.com', children: [{ text: 'here' }]},
          { text: 'or contact us ' },
          { type: 'link', href: 'https://xyz.com/contact', children: [{ text: 'here.' }]},
        ], 
      });

      /*

        Content Block Output
        `
          For more info check here or contact us here
        `
        Having link at both "here" text.
      */

    });

Parameters
++++++++++

+----------+-------------------+-----------------------------------------------------------------------------+
| Name     | Type              | Description                                                                 |
+==========+===================+=============================================================================+
| options  | ``Object``        | Required. data for image insertion.                                         |
+----------+-------------------+-----------------------------------------------------------------------------+
| path?    | ``Array<Number>`` | Path for the block, if not given, block will be inserted at cursor position.|
+----------+-------------------+-----------------------------------------------------------------------------+

options
+++++++

+-------------+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Name        | Type              | Description                                                                                                                                                                                                     |
+=============+===================+=================================================================================================================================================================================================================+
| type        | ``String``        | Type of the block to be created. valid types are ``link``, ``image``, ``paragraph``, ``list-item``, ``heading-two``, ``heading-three``, ``heading-four``,  ``numbered-list``, ``bulleted-list`` and ``quote``.  |
+-------------+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| children    | ``Array<Object>`` | Children and leaf nodes configs for the block.                                                                                                                                                                  |
+-------------+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| href?       | ``String``        | Can be used to assign href to the link type block.                                                                                                                                                              |
+-------------+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+             
| caption?    | ``String``        | Can be used to assign caption text to the image type block.                                                                                                                                                     |
+-------------+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+             
| alt?        | ``String``        | Can be used to assign alt text to the image type block.                                                                                                                                                         |
+-------------+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+             
| align?      | ``String``        | Alignment of the block. valid values are ``left``, ``right`` and ``center``.                                                                                                                                    |
+-------------+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+             
| bold?       | ``Boolean``       | Makes your text bold. can be applied to text leave nodes.                                                                                                                                                       |
+-------------+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+             
| italic?     | ``Boolean``       | Makes your text italic. can be applied to text leave nodes.                                                                                                                                                     |
+-------------+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+             
| underlined? | ``Boolean``       | Makes your text underlined. can be applied to text leave nodes.                                                                                                                                                 |
+-------------+-------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+             
