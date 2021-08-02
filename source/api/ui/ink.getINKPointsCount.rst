getINKPointsCount ``UI.ink``
=============================

`getINKPointsCount` API returns a promise with INK points count as a resultant value.

Syntax
++++++

.. code-block:: javascript

   getINKPointsCount() : Promise<String|Number>
   
Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const UI = INKAPI.ui;

      const INKPoints = await UI.ink.getINKPointsCount();

      console.log(INKPoints);

      /*
        Console Output ::

          => 128

          => ∞   // incase of unlimited plan
      */

    });