Permissions
===========

Use the ``permissions`` key to request special APIs for your INK Plugin. This key is an array of strings, and each string is a request for a permission.

Some INK APIs requires special permissions and to use them in your plugin, you must mention the permissions requests in your ``package.json`` file under ``ink-plugin`` section. 

Example
+++++++

.. code-block:: javascript
    :linenos:

    "name": "example-plugin",
    
    ...
    ...
    ...

    "ink-plugin": {
    
      "permissions": [
        "network",
      ]
    }

In the above example, we are requesting permission to use network access APIs which will unlock APIs from ``NET`` namespace.

If you request permissions for your plugin, then the INK Editor will inform the user at install time that the plugin is requesting certain privileges, and ask them to confirm that they are happy to grant these privileges. The INK Editor may also allow the user to inspect a plugin's privileges after installation. As the request to grant privileges may impact on users' willingness to install your plugin, requesting privileges is worth careful consideration. For example, you want to avoid requesting unnecessary permissions and may want to provide information about why you are requesting permissions in your plugin's readme file.


API Permissions
+++++++++++++++

Following are the currently available API permissions.

+-----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Permission Request    | Description                                                                                                                                                   |
+=======================+===============================================================================================================================================================+
| network               | `network` permission will allow network access to the plugins. Plugins having this permission will have access to ``net`` namespace APIs.                     |
+-----------------------+---------------------------------------------------------------------------------------------------------------------------------------------------------------+
