addEvent ``UI``
===============

`addEvent` API is used to register event listener callbacks against UI component's events.

Syntax
++++++

.. code-block:: javascript

   addEvent(componentId: String | Number, eventName: String, ListenerCB: Function)
   
Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const UI = INKAPI.ui;

      const btnId = "btnId";

      const sidebarObject = await UI.create({
        type: "Sidebar",
        sidebarTitle: "My Personal Sidebar",
        icon: "./sample.svg",
        id: "myUniqueSidebarId",
        children:[
          {
            type: "Button",
            text: "Click Me!",
            id: btnId,
          }
        ]
      });

      UI.addEvent(btnId, "click", clickHandler)

      function clickHandler(){
        console.log("Button Clicked!")      
      }
    });


Parameters
++++++++++

+--------------+----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Name         | Type                 | Description                                                                                                                                                   |
+==============+======================+===============================================================================================================================================================+
| componentId  | ``String | Number``  | Id of the UI Component whose event we need to listen to.                                                                                                      |
+--------------+----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| eventName    | ``String``           | Name of the event. Every component can have different event that they emit like click, change, etc.                                                           |
+--------------+----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ListenerCB   | ``Function``         | Callback function to be called when the event occurs.                                                                                                         |
+--------------+----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
