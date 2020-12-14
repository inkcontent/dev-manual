getPOS ``NLP``
==============

`getPOS` API retrieve parts of speech counts for any content block.

Syntax
++++++

.. code-block:: javascript

   getPOS(blockKey: Number) : Promise<object>

Example
+++++++

.. code-block:: javascript
    :linenos:

    import INKAPI from './inkapi.js'

    INKAPI.ready(async () => {

      const NLP = INKAPI.nlp;

      const data = await NLP.getPOS(1);

      console.log(data);

      /*
        Console Output:

        {
          "ADJECTIVE": 2,
          "ADVERB": 2,
          "CONJUNCTION": 2,
          "DETERMINER": 3,
          "INTERJECTION": 0,
          "NOUN": 5,
          "PREPOSITION": 1,
          "PRONOUN": 3,
          "VERB": 4,
          "CARDINAL": 0
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
