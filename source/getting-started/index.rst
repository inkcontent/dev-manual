Introduction
============

INK software is used by tens of thousands of content creators to make their content get found, be more engaging and convert.

With plugins you can greatly extend and expand the functionality of the INK Editor. At launch, you are able to create export plugins. We are quickly expanding the power of the API to enable new types of plugins. You can find some demo plugins here.

We designed our plugin architecture with developers in mind. You can make a fully functioning plugin in minutes, using vanilla JavaScript and our handy command line tools.

Quick Start
===========

To quickly get started creating INK plugins, follow the steps below.

#. Install INK CLI tool ``inkplugin`` globally using ``npm install -g inkplugin``
#. Create INK Plugin project using ``inkplugin create <your-project-name>``
#. Start writing your plugin code in the ``main.js`` using INK APIs_.

.. note:: 

    Under ``engines`` section in ``package.json``, cli tool will automatically add the latest version for INK Editor support. you can change it as per your needs.

In its simplest form, the plugin main entry JS file looks like this.

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

We use importScript to import INKAPI because each ink plugin runs inside a separate worker.

In the above example, we are importing ``inkapi.js`` that will provide us with INKAPI globally and making use of its ready function, we can initiate our plugin code once the INK APIs are ready to use. Also you can see some api namespaces that are available through INKAPI. 


Add Menu Item
+++++++++++++

Let's try to add a menu item in INK using the ``UI`` API Namespace.

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

In above code we have added a menu item in the INK export menu and also it's click handler is bind with the callback function.

Now, let's try to retrieve the INK editor content and save it to user disk in html format.

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


Our html export plugin is ready for use, yes that's all it takes. Now we will need to package our plugin project for distribution.

Packaging Plugin
++++++++++++++++

To package our plugin project we will use INK CLI ``inkplugin package`` command in our project root directory. 

.. code::

  inkplugin package

This command will create a packaged plugin file which is also know as ``Dye`` file. This file will be used for installing your plugin into INK editor.


Plugin Installation
+++++++++++++++++++

Installing a plugin ``Dye`` file in editor is very simple. You can basically drag and drop your Dye file in INK Editor and it will prompt you for confirmation, just click on "Install Now" and you are all done. You can also manually go into plugin sidebar on the left side of the editor and click on the "Add Plugin" option. It will open up a dialog box and you can select your Dye file.

After Installation you can go ahead and check if your plugin has created the ``as Demo HTML`` entry in the export menu and also try to export some content. 


.. note::

    - More on INK API Namespaces in APIs_ section.
    - More on INK CLI Tool in Command_ `Line Tools`__ section.


.. _Command: /cli

__ Command_

.. _APIs: /api
