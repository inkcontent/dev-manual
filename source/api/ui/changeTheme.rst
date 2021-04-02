changeTheme ``UI``
==================

`changeTheme` API can be used to dynamically change your INK editor theme with the combinations of different colors.

Syntax
++++++

.. code-block:: javascript

   changeTheme({
    base: String,
    font: String,
    primary?: String,
    border?: String,
    panelIcon?: String,
    toggle?: String,
    sidebar?: String,
    inputBase?: String,
    sidebarHover?: String,
    inkBrand?: String,
   });


INK editor can create a new theme from just two colors (``base`` and ``font``). It smartly calculates all the other type of colors required to complete the theme. Although if user don't like the auto calculated colors or just want to modify theme as per their liking, They can provide colors to the more advanced color fields.
Currently ``base`` and ``font`` colors are compulsory for ``changeTheme`` api.

   
Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const UI = INKAPI.ui;

      UI.changeTheme({
        base: "#424642",
        font: "#f3f4ed",
        primary: "#c06014",
        sidebar: "#536162",
        inkBrand: "#e2d5d5"
      })
      // Above code will create greyish theme for the editor.

    });

.. note::

  ``changeTheme`` api will only work if your plugin theme modifier is selected by the user in INK editor.


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