Modify Editor Theme
===================

INK allow plugin developers to change INK Editor themes according to their preference. Theme color pallete can be modified dynamically by plugin on the basis of day time or maybe the content scores.

To create a plugin that will modify INK Editor theme, first we will have to register a theme modifier using ``addThemeModifier`` API.

.. code-block:: javascript

  INKAPI.ready(async () => {

    const UI = INKAPI.ui;

    const themeKey = await UI.addThemeModifier("Greyish");
  
  }


This will basically tell the INK Editor that this plugin wants to make theme modifications. And an option with the given name will be created in the themes dropdown.

Now, it is important that user selects your theme modifier before you make any theme changes. If your plugin theme modifier isn't selected and you try to make theme changes, it won't work and will respond with a rejection.

To figure out when our theme modifier is selected, we will have to listent to an event called ``themeSwitch``.

.. code-block:: javascript

  INKAPI.ready(async () => {

    const UI = INKAPI.ui;

    const themeKey = await UI.addThemeModifier("Greyish");
  
    UI.on(themeSwitchHandler, "themeSwitch")

    function themeSwitchHandler(selectedId){
      //empty for now
    }
  }

Alright, now we have registered a theme modifier and we are listening for when the theme gets switched. In `themeSwitch` event listener, callback function gets a parameter with the ID of selected theme. We can use this ID to match with our `themeKey` to check if our theme modifier got selected and if it did gets selected, we can make changes to the theme using ``changeTheme`` API.

.. code-block:: javascript

  INKAPI.ready(async () => {

    const UI = INKAPI.ui;

    const themeKey = await UI.addThemeModifier("Greyish");
  
    UI.on(themeSwitchHandler, "themeSwitch")

    function themeSwitchHandler(selectedId){
      if(selectedId !== themeKey) return; // return if selected theme is not our theme modifier
      UI.changeTheme({
        base: "#424642",
        font: "#f3f4ed",
        primary: "#c06014",
        sidebar: "#536162",
        inkBrand: "#e2d5d5"
      })
    }

  }

That's all folks, we just created a plugin that will create a new theme option called "Greyish" and when user will select it, it will change accordingly.