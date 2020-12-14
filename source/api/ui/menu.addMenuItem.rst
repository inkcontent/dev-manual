addMenuItem ``UI.menu``
=======================

`addMenuItem` API allows plugin to create a menu item in INK Editor. 

Syntax
++++++

.. code-block:: javascript

   addMenuItem(triggerCB: function, ...Structure: Array<String>)

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(() => {

      const UI = INKAPI.ui;

      // This will create a menu item entry at File > Export > Table of contents
      UI.menu.addMenuItem(extractTOC, "File", "Export", "Table of contents"); 

      function extractTOC() {
        
        // triggered on menu item click
        console.log("Table of contents");

      }
      
    });


Parameters
++++++++++

+----------------+-------------------+------------------------------------------------------------------------------------------------------------------------------------------------------+
| Name           | Type              | Description                                                                                                                                          |
+================+===================+======================================================================================================================================================+
| triggerCB      | ``function``      | Required. a callback function which will be triggered on menu item click.                                                                            |
+----------------+-------------------+------------------------------------------------------------------------------------------------------------------------------------------------------+
| Structure      | ``Array<String>`` | Required. All the parameters after first callback param will be a structure path to the menu item entry location.                                    |
+----------------+-------------------+------------------------------------------------------------------------------------------------------------------------------------------------------+
