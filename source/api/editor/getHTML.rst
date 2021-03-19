getHTML ``EDITOR``
==================

`getHTML` API extracts the content from the INK Editor and parse it into an HTML string as a resultant value.

Syntax
++++++

.. code-block:: javascript

   getHTML(localImages? : Boolean) : Promise<String>

Example
+++++++

.. code-block:: javascript
    :linenos:

    


Parameters
++++++++++

+--------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Name         | Type        | Description                                                                                                                                                   |
+==============+=============+===============================================================================================================================================================+
| localImages? | ``Boolean`` | getHTML API provides html string with image src in base64 format, if passed ``true`` in parameter all images in html string will have local source url.       |
+--------------+-------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
