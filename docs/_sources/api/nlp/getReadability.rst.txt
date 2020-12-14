getReadability ``NLP``
======================

`getReadability` API retrieves readability data and details calculated using different algorithms.

Syntax
++++++

.. code-block:: javascript

   getReadability(blockKey: Number) : Promise<object>

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const NLP = INKAPI.nlp;

      const data = await NLP.getReadability(1);

      console.log(data);

      /*
        Console Output:

        {
          "FleschKincaid": 6.790000000000003,
          "GunningFog": 11.466666666666667,
          "ColemanLiau": 5.988333333333333,
          "SMOG": null,
          "AutomatedReadability": 3.998750000000001,
          "AVGGrade": 7.0609375000000005,
          "FleschKincaidFRES": 67.75500000000001,
          "FleschKincaidFRESGrade": 9,
          "NewDaleChall": 8.837116666666667,
          "NewDaleChallGrade": 11.5,
          "SpacheGrade": 4.844333333333332,
          "AVGIndex": 8.44811111111111,
          "FinalGrade": 8
        }

      */

    });

Parameters
++++++++++

+----------+-------------------+-----------------------------------------------------------------------+
| Name     | Type              | Description                                                           |
+==========+===================+=======================================================================+
| blockKey | ``Number``        | Required. Key of the block to be selected.                            |
+----------+-------------------+-----------------------------------------------------------------------+

.. note::

   Learn more about how blocks work in INK editor `here <../../advanced/INK-Editor-Blocks-Architecture.html>`_.