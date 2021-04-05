addThemeModifier ``UI``
=======================

`addThemeModifier` API registers a theme modifier on INK editor for your plugin. Which basically allows your plugin to make theme changes if your theme modifier is selected.

Syntax
++++++

.. code-block:: javascript

   addThemeModifier(title: String) : Promise<String>

`addThemeModifier` API returns a unique id that will be helpful to check if your theme modifier is selected.

.. note::

  For more info on how to make theme changes on INK editor, check here.

   
Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const UI = INKAPI.ui;

      // creates a theme modifier with title "Dark AMOLED Theme" and saved returned ID in a variable.
      const themeModifierId = await UI.addThemeModifier("Dark AMOLED Theme");

      UI.on(themeModifierSwitchHandler, "themeSwitch")

      function themeModifierSwitchHandler(data){

        //check if the selected theme modifier is not your plugin's
        if(data !== themeModifierId) return;

        // Make theme changes here...
      
      }

    });


Parameters
++++++++++

+----------+-------------------+-----------------------------------------------------------------------+
| Name     | Type              | Description                                                           |
+==========+===================+=======================================================================+
| options  | ``Object``        | Required. Contains the Hex colors for INK editor theme.               |
+----------+-------------------+-----------------------------------------------------------------------+

options
+++++++

+---------------+---------------+-----------------------------------------------------------------------------------------------------+
| Field         | Required      | Description                                                                                         |
+===============+===============+=====================================================================================================+
| base          | true          | changes theme background color. This field is required while changing theme.                        |
+---------------+---------------+-----------------------------------------------------------------------------------------------------+
| font          | true          | changes the color of the font used in the INK Editor. This field is required while changing theme.  |
+---------------+---------------+-----------------------------------------------------------------------------------------------------+
| primary       | false         | color of link, icon, active state, selection state and hover state.                                 |
+---------------+---------------+-----------------------------------------------------------------------------------------------------+
| border        | false         | color of borders and separators used in left and right sidebars.                                    |
+---------------+---------------+-----------------------------------------------------------------------------------------------------+
| panelIcon     | false         | color of icons on left and right sidebars.                                                          |
+---------------+---------------+-----------------------------------------------------------------------------------------------------+
| toggle        | false         | color of boxes related to tasks.                                                                    |
+---------------+---------------+-----------------------------------------------------------------------------------------------------+
| sidebar       | false         | color of left and right sidebar.                                                                    |
+---------------+---------------+-----------------------------------------------------------------------------------------------------+
| inputBase     | false         | background color of inputs.                                                                         |
+---------------+---------------+-----------------------------------------------------------------------------------------------------+
| sidebarHover  | false         | background color in sidebar when hovered.                                                           |
+---------------+---------------+-----------------------------------------------------------------------------------------------------+
| inkBrand      | false         | INK brand color (pink)                                                                              |
+---------------+---------------+-----------------------------------------------------------------------------------------------------+