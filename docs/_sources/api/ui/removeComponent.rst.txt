removeComponent ``UI``
======================

`removeComponent` API is used to remove any custom UI component using it's unique ID.

Syntax
++++++

.. code-block:: javascript

   removeComponent(id: String | Number)
   
Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const UI = INKAPI.ui;

      const sidebarId = "myUniqueSidebarId";

      const sidebarObject = await UI.create({
        type: "Sidebar",
        sidebarTitle: "My Personal Sidebar",
        icon: "./sample.svg",
        id: sidebarId,
      });

      /*
      .
      .
      .
      */

      // Removing Sidebar Component
      UI.removeComponent(sidebarId);

    });


Parameters
++++++++++

+--------------+----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Name         | Type                 | Description                                                                                                                                                   |
+==============+======================+===============================================================================================================================================================+
| id           | ``String | Number``  | Id of the custom UI component to be removed.                                                                                                                  |
+--------------+----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
