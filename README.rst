================
Testing three.js
================
.. contents:: **Contents**
   :depth: 5
   :local:
   :backlinks: top

Drawing lines
=============
.. raw:: html

  <p align="center">
    <a href="https://jsfiddle.net/raul23/54qtakvj/30/" target="_blank">
      <img src="./images/drawing_lines.png">
    </a>
  </p>
  
`:information_source:` 

 - from `Drawing lines (threejs.org) <https://threejs.org/docs/index.html#manual/en/introduction/Drawing-lines>`_
 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/54qtakvj/30/>`_ (added comments from the tutorial)

Add fog to a scene
==================
.. raw:: html

  <p align="center">
    <img src="./images/fog.png">
  </p>

`:information_source:` 

 - from `Three.js - Renderer & Responsiveness (tutorialspoint.com) <https://www.tutorialspoint.com/threejs/threejs_renderer_and_responsiveness.htm>`_
 - Example: black fog (``0x000000``) that increases linearly
 
   .. code-block:: javascript

      scene.fog = new THREE.Fog(0x000000, 0.015, 100)
      
   "You can use the preceding two properties to tune how the mist appears. The 0.015 value sets the near property, 
   and the 100 value sets the far property. With these properties, you can determine where the fog starts and how 
   fast it gets denser."
 - Example: black fog (``0x000000``) that increases exponentially with a mist's density of 0.01

   .. code-block:: javascript
  
      scene.fog = new THREE.FogExp2(0x000000, 0.01)

Add multiple cubes in a scene
=============================
.. raw:: html

  <p align="center">
    <a href="https://jsfiddle.net/raul23/pze9obf5/92/" target="_blank">
      <img src="./images/multiple_cubes.png">
    </a>
  </p>
  
`:information_source:` 

 - from `Three.js - Renderer & Responsiveness (tutorialspoint.com) <https://www.tutorialspoint.com/threejs/threejs_renderer_and_responsiveness.htm>`_
 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/pze9obf5/92/>`_
 - NOTES:
 
   - They add a GUI to control the camera by controlling its z-position:
   
     **HTML:**
     
     .. code-block:: html
   
        <script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.7/dat.gui.js">
   
     **JavaScript:**
     
     .. code-block:: javascript
     
        const gui = new dat.GUI();
        gui.add(camera.position, 'z', 10, 200, 1).name('camera-z')

Wireframe cube
==============
Static
-------
.. raw:: html

  <p align="center">
    <a href="https://jsfiddle.net/raul23/Lywna1pj/55/" target="_blank">
      <img src="./images/hello_cube_app.png">
    </a>
  </p>

`:information_source:` 

 - from `Three.js - Hello Cube App (tutorialspoint.com) <https://www.tutorialspoint.com/threejs/threejs_hello_cube_app.htm>`_
 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/Lywna1pj/55/>`_ (added comments from the tutorial)

Spinning + responsiveness
-------------------------
.. raw:: html

  <p align="center">
    <a href="https://jsfiddle.net/raul23/56keob9d/20/" target="_blank">
      <img src="./images/spinning_wireframe_cube.png">
    </a>
  </p>

`:information_source:` 

 - from `Three.js - Responsive Design (tutorialspoint.com) <https://www.tutorialspoint.com/threejs/threejs_responsive_design.htm>`_
 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/56keob9d/20/>`_ (added comments from the tutorial)

Solid cube spinning
===================
.. raw:: html

  <p align="center">
    <a href="https://jsfiddle.net/raul23/0zwtbd12/8" target="_blank">
      <img src="./images/spinning_cube.png">
    </a>
  </p>
  
`:information_source:` 

 - from `Creating a scene (threejs.org) <https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene>`_
 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/0zwtbd12/8>`_ (added comments from the tutorial)
