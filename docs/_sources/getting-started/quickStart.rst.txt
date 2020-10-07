Quick Start
===========

.. raw:: html

   <iframe width="100%" height="392" src="https://www.youtube.com/embed/PXwtQPNyGLU?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <br><br>

Quickly get started creating your own INK plugins by following these easy steps.

#. Install the INK CLI tool ``inkplugin`` globally using ``npm install -g inkplugin``
#. Create an INK Plug-in project using ``inkplugin create <your-project-name>``
#. Start writing your plug-in code in this ``main.js`` using our INK APIs_.

.. note:: 

    Under the ``engines`` section in ``package.json``, the CLI tool will automatically add the latest version of the INK Editor Support. Feel free to change this according to your need.

In its simplest form, the plug-in main entry JS file looks like this:

.. code-block:: javascript
    :linenos:

    importScripts('./inkapi.js');
    
    INKAPI.ready(() => {
      const UI= INKAPI.ui;
      const IO= INKAPI.io;
      const Editor= INKAPI.editor;
      
      //your code here

      console.log("Hello, INK Plugin World!");

    });

.. note::

   Because each INK plug-in runs inside a separate worker, we use importScript to import INK APIs.

In the above example, you’ll notice that we import ``inkapi.js`` in order to provide the INK API globally. Once the INK API is ready to use, you can take advantage of its ready function to initiate the plug-in code. Additionally, you’ll also notice some API namespaces that are available through the INK API.


How to Add a Menu Item
++++++++++++++++++++++

Now, let’s add a menu item in the INK application using the ``UI`` API Namespace:

.. code-block:: javascript
    :linenos:

    importScripts('./inkapi.js');
    
    INKAPI.ready(() => {
      const UI= INKAPI.ui;
      
      //your code here
      UI.menu.addMenuItem(clickHandler, "File", "Export", "as Demo HTML");

    });

    function clickHandler(){
      //do something on menu click
    }

The above code adds a menu item inside the INK export menu. It also binds the menu option’s click handler with the callback function.

Next, let’s retrieve the INK Editor content and save it to disk as HTML:

.. code-block:: javascript
    :linenos:

    importScripts('./inkapi.js');
    
    INKAPI.ready(() => {
      const UI= INKAPI.ui;
      
      //your code here
      UI.menu.addMenuItem(clickHandler, "File", "Export", "as Demo HTML");

    });

    async function clickHandler(){
    
      //do something on menu click
      const Editor= INKAPI.editor;
      const IO= INKAPI.io;

      const htmlString = await Editor.getHTML(); //retrieve editor content in html format.

      IO.saveFile(htmlString, 'html');  //open save dialog with only html file extension

    }


And just like that, our HTML export plug-in is ready to use! (simple, right?) At this point, it’s time to package the plug-in for distribution so that others can enjoy it as well.

How to Package Your Plug-in
+++++++++++++++++++++++++++

To package your plug-in, use the INK CLI ``inkplugin package`` command in our project root directory:

.. code::

  inkplugin package

This command will create a packaged plugin file which is also know as ``Dye`` file. This file will be used for installing your plugin into INK editor.


How to Install Your Plug-in
+++++++++++++++++++++++++++

It’s super easy to install a plug-in ``Dye`` file in the INK Editor. Just drag and drop your Dye file into the INK Editor. Then, INK will prompt you to confirm. When this happens, click on “Install Now” and you’re done! 

Alternatively, you can manually install your plug-in by opening the Plug-in Sidebar on the left side of the editor. Then, click on the “Add Plugin” option. This will open up a dialog box where you can select your Dye file.

After completing the plug-in installation, check that your plug-in created the ``as Demo HTML`` entry in the export menu and try to export some content.

.. note::

    - More in INK API Namescapes under the APIs_ section.
    - More on the INK CLI Tool under the Command_ `Line Tools`__ section.

.. _Command: /cli

__ Command_

.. _APIs: /api
