showINKPointsModal ``UI.ink``
=============================

`showINKPointsModal` API triggers and display the INK Points Modal.

Syntax
++++++

.. code-block:: javascript

   showINKPointsModal() : void
   
Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(() => {

      const UI = INKAPI.ui;

      UI.ink.showINKPointsModal();

      // INK Editor's native INK Points Modal opens up...

    });