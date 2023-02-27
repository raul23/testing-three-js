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

Anti-aliasing
=============
.. raw:: html

  <div align="center">
    <a href="https://jsfiddle.net/raul23/uc6rbLg2/13/" target="_blank">
      <img src="./images/anti-aliasing.png" width="384" height="287">
    </a>
    <p align="center">With anti-aliasing</p>
  </div>

|

.. raw:: html

  <div align="center">
    <a href="https://jsfiddle.net/raul23/uc6rbLg2/13/" target="_blank">
      <img src="./images/spinning_wireframe_cube.png">
    </a>
    <p align="center">Without anti-aliasing</p>
  </div>

`:information_source:` 

 - from `Three.js - Responsive Design (tutorialspoint.com) <https://www.tutorialspoint.com/threejs/threejs_hello_cube_app.htm>`_
 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/uc6rbLg2/13/>`_ (added comments from the tutorial)
 - NOTES:
 
   - "The aliasing effect is the appearance of jagged edges or "jaggies" (also known as stair-stepped lines) 
     on edges and objects (rendered using pixels)."
     
     .. code-block:: javascript
        
        const renderer = new WebGLRenderer({ antialias: true })
        renderer.physicallyCorrectLights = true

     "The property ``physicallyCorrectLights`` tells Three.js whether to use physically correct lighting mode. 
     Default is false. Setting it to true helps increase the detail of the object."

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
    <a href="https://jsfiddle.net/raul23/56keob9d/34/" target="_blank">
      <img src="./images/spinning_wireframe_cube.png">
    </a>
  </p>

`:information_source:` 

 - from `Three.js - Responsive Design (tutorialspoint.com) <https://www.tutorialspoint.com/threejs/threejs_responsive_design.htm>`_
 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/56keob9d/34/>`_ (added comments from the tutorial)
 - Responsiveness:
 
   .. code-block:: javascript
   
      window.addEventListener('resize', () => {
        // update display width and height
        width = window.innerWidth
        height = window.innerHeight
        // update camera aspect
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        // update renderer
        renderer.setSize(window.innerWidth, window.innerHeight)
        // TODO: the following line was not there originally but it 
        // was in their tutorial
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.render(scene, camera)
      })
      
   "Now, resize the browser. Due to the responsive design, the object will always reposition itself at the center of the browser." 

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
