setNodeData ``EDITOR``
======================

setNodeData API can change meta data of any block in INK Editor.


.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const EDITOR = INKAPI.editor;

      const options = { 
        title: "my favorite cat",
        caption: "This is a picture of my favorite cat",
        alt: "Cat Playing",  
      };

      EDITOR.setNodeData(options, [3]);

    });


Parameters
++++++++++

options: ``Object``

path: ``Array<Number>``


options
+++++++

file ``String`` : sets src url for the image node.

type ``String`` : this option can change node type. Valid node types are: ``heading-two``, ``heading-three``, ``heading-four``, ``numbered-list``, ``bulleted-list``, ``list-item``, ``paragraph``, ``quote``

title ``String`` : sets title for the image node.

caption ``String`` : sets caption text for the image node.

alt ``String`` : sets alt text for the image node.

size ``Number`` : sets image node size range between 20 - 100.

quality ``Number`` : set image node quality range between 30 - 100.

align ``String`` : Set alignment for the node. Valid alignments are: ``left``, ``right``, ``center``.

.. note::

   Learn more about how blocks work in INK editor `here </advanced/INK-Editor-Blocks-Architecture.html>`_.