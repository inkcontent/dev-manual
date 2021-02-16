Custom Sidebar UI
=================

INK Editor allows plugins to create their own custom sidebar and its content. Using this, plugins can easily create an interface for their settings, personalization, or maybe just their descriptions.

INK Editor use simple JSON based architecture to create custom sidebar and it's children elements. Which allows the power to create complex UI with simplicity. 

.. code::

  const sidebar = await INKAPI.uiCreate({
    type: "Sidebar",
    sidebarTitle: "Custom Sidebar",
    icon: "./sidebarIcon.svg",
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
          margin: "20px auto",
          width: "220px",
          height: "220px",
          backgroundSize: "contain",
        },
      },
    ],
  });