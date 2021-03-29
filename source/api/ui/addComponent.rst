addComponent ``UI``
===================

`addComponent` API is used to add UI component dynamically as a child of other components.

Syntax
++++++

.. code-block:: javascript

   addComponent(jsonObj: Object, parentId: String | Number)
   
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

      // Adding Button Component to Sidebar dynamically
      UI.addComponent({
        type: "Button",
        text: "Send",
      }, sidebarId);

    });


Parameters
++++++++++

+--------------+----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Name         | Type                 | Description                                                                                                                                                   |
+==============+======================+===============================================================================================================================================================+
| jsonObj      | ``Object``           | JSON based configuration for creating custom UI components.                                                                                                   |
+--------------+----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| parentId     | ``String | Number``  | Id of the custom UI component, where the component needs to be inserted.                                                                                      |
+--------------+----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
