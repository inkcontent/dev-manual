Container
=========

``Container`` type creates a Container element in the sidebar content. It is a special element that has its own content area with custom styles and It can have children components. 

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {
      
      const UI = INKAPI.ui;

      const sidebarObj = await UI.create({
        type: "Sidebar",
        sidebarTitle: "Personal Sidebar",
        icon: "./sample.svg",
        children: [
          {
            type: "Container",
            id: "myContainer",
            styles: {
              "border-radius": "5px",
            }
            layout: [3, 3], // two columns and two rows
          },
        ],
      });

      console.log(sidebarObj);

    });

Options
+++++++

+--------------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Name         | Type                                   | Description                                                                                                                                                                                                                                                                                         |
+==============+========================================+=====================================================================================================================================================================================================================================================================================================+
| id?          | ``String | Number``                    | You can assign a unique id to the component. It will be helpful for listening to events and removing component in future. If ``id`` is not given by user (or if given ``id`` is already associated with a UI component) then an automatically generated id is assigned to the component.            |
+--------------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| type         | ``Container``                          | This field should be passed ``Container`` as value to create a Container component. This value is case-sensitive.                                                                                                                                                                                   |
+--------------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| layout?      | ``[ columns: Number, rows: Number ]``  | This will create grid like structure for your container content. you can specify number of columns and rows for the layout. Each children can position themselves using styles field.                                                                                                               |
+--------------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| styles?      | ``Object``                             | Custom styles for the element.                                                                                                                                                                                                                                                                      |
+--------------+----------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
