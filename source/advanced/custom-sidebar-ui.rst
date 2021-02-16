Custom Sidebar UI
=================

INK Editor allows plugins to create their own custom sidebar and its content. Using this, plugins can easily create an interface for their settings, personalization, or maybe just their descriptions.

INK Editor use simple JSON based architecture to create custom sidebar and it's child components. Which allows the power to create complex UI with simplicity. 

.. code::

  const sidebar = await INKAPI.uiCreate({
    type: "Sidebar",
    sidebarTitle: "My Personal Sidebar",
    icon: "./sample.svg",
  });

In the above code we are making use of ``uiCreate`` API to create a custom sidebar with title 'My Personal Sidebar' and custom icon. Yes! it is that easy.

As you can see in the example that we are passing JavaScript object with some data to the ``uiCreate`` API. Let's break it down. Following are the most common and standard fields for all ui components.

+--------------+-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Name         | Type        | Description                                                                                                                                                                                                  |
+==============+=============+==============================================================================================================================================================================================================+
| type         | ``String``  | This is a mandatory field and explains the type of component you are trying to create. Currently INK Editor supports only few element types including ``Sidebar``, ``Input``, ``Button`` and ``Toggle``.     |
+--------------+-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| id           | ``String``  | This field assigns a unique id to the created component. If no id is provided, an automatically generated id will be assigned. It is recommended to assign id yourself.                                      |
+--------------+-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| styles       | ``Object``  | This field can be used for implementing custom CSS styles to the component.                                                                                                                                  |
+--------------+-------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

Above are the standard fields and can be used in all element. Other than above fields, each element have their own unique fields.

Now, if we look at above code example it will only create an empty sidebar which isn't much useful. To create child components in the custom sidebar, we use ``children`` field which accepts an array of objects.

.. code::

  const sidebar = await INKAPI.uiCreate({
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
  });

In the above example we are create a custom sidebar with two children components (an input and a button).