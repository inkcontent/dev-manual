create ``UI``
=============

`create` API is used to create custom sidebar and its content in INK Editor. Using this, plugins can easily create an interface for their settings, personalization, or maybe just their descriptions.

INK Editor use simple JSON based architecture to create custom sidebar and it's child components. Which allows the power to create complex UI with simplicity. 

Syntax
++++++

.. code-block:: javascript

   create(configs: Object) : Promise<object>

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const UI = INKAPI.ui;

      const sidebarConfigs = {
        type: "Sidebar",
        sidebarTitle: "My Personal Sidebar",
        icon: "./sample.svg",
        children: [
          {
            type: "Input",
            id: "input",
            styles: {
              margin: "10px auto",
              width: "95%",
            },
          },
          {
            type: "Button",
            id: "imgBtn",
            image: "./dice.jpg",
            styles: {
              width: "220px",
              height: "220px",
            },
          },
        ],
      };

      const sidebarObject = await UI.create(sidebarConfigs);

      /*
        create API returns an object containing data and methods for the created components. We calls it shadow object. for eg.
        For Sidebar component, the shadow object will have functions to change its title, toggle the loading state of sidebar, etc.
      */

    });


Parameters
++++++++++

+--------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Name         | Type        | Description                                                                                                                                                   |
+==============+=============+===============================================================================================================================================================+
| JsonData     | ``Object``  | JSON based configuration for creating custom UI components.                                                                                                   |
+--------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
