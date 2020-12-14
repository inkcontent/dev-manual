INK Editor Blocks Architecture
==============================

INK Editor uses blocks architecture to maintain its content, control the changes and overall manage content operations. In order to manipulate or analyze the content inside INK editor, we need to understand how exactly does `blocks` works. Few important points below;

* INK Editor uses an array-based hierarchy to store content.
* Each element in the array is called block or node.
* A node is an array, containing children nodes or leaves.
* A leaf is a text node with no children.
* Every node have some properties that can be modified using plugin APIs.

Because it's an array based hierarchy, a node can be accessed with its index (its path).

For example, an image node have properties such as `caption`, `alt text`, `title`, `size`, etc. and all of these properties can be modified using ``editor.setBlockData`` API.

To explore different properties of different types of blocks. Try using ``editor.getAllBlocks`` API to extract all the blocks in the document.