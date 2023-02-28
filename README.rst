================
Testing three.js
================
`:information_source:`

 - `three.js's cdn library files <https://cdnjs.com/libraries/three.js>`_

   Example:

   .. code-block:: html
   
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.150.1/three.min.js"></script>
      
   **NOTE:** add rest of ``<script>``'s attributes, i.e. ``integrity="sha512..."``
      
.. contents:: **Contents**
   :depth: 5
   :local:
   :backlinks: top

Boilerplate files
=================
HTML
----
.. code-block:: html

   <!DOCTYPE html>
   <html>
      <head>
         <meta name="viewport" content="width=device-width, initial-scale=1" />
         <meta http-equiv="X-UA-Compatible" content="ie=edge" />
         <meta charset="UTF-8" />
         <title>Three.js</title>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.150.1/three.min.js"></script>
         <script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.9/dat.gui.min.js"></script>
      </head>
      <body>
         <!-- The threejs-container takes up the whole screen. -->
         <div id="threejs-container">
            <!-- Our output to be rendered here -->
         </div>
      </body>
   </html>

**Source:** `tutorialspoint.com <https://www.tutorialspoint.com/threejs/index.htm>`_

CSS
---
.. code-block:: css

   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: -applesystem, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
        Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    html, body {
      height: 100vh;
      width: 100vw;
    }

    #threejs-container {
      position: block;
      width: 100%;
      height: 100%;
    }

**Source:** `tutorialspoint.com <https://www.tutorialspoint.com/threejs/index.htm>`_

JavaScript (wireframe cube with GUI)
------------------------------------
.. code-block:: javascript

   // UI
   const gui = new dat.GUI()
   // sizes
   let width = window.innerWidth
   let height = window.innerHeight

   // scene
   const scene = new THREE.Scene()
   scene.background = new THREE.Color(0x262626)

   // camera
   const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
   camera.position.set(0, 0, 10)

   // cube
   const geometry = new THREE.BoxGeometry(2, 2, 2)
   const material = new THREE.MeshBasicMaterial({
     color: 0xffffff,
     wireframe: true
   })

   // GUI
   gui.add(material, 'wireframe')
   const cube = new THREE.Mesh(geometry, material)
   scene.add(cube)
   gui.add(cube.position, 'x')
   gui.add(cube.position, 'y')
   gui.add(cube.position, 'z')

   // responsiveness
   window.addEventListener('resize', () => {
     width = window.innerWidth
     height = window.innerHeight
     camera.aspect = width / height
     camera.updateProjectionMatrix()
     renderer.setSize(window.innerWidth, window.innerHeight)
     renderer.render(scene, camera)
   })

   // renderer
   const renderer = new THREE.WebGL1Renderer()
   renderer.setSize(width, height)
   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

   // animation
   function animate() {
     requestAnimationFrame(animate)
     cube.rotation.x += 0.005
     cube.rotation.y += 0.01
     renderer.render(scene, camera)
   }

   // rendering the scene
   const container = document.querySelector('#threejs-container')
   container.append(renderer.domElement)
   renderer.render(scene, camera)
   animate()   

**Source:** `tutorialspoint.com <https://www.tutorialspoint.com/threejs/threejs_debug_and_stats.htm>`_

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
        
     `dat.GUI's GitHub <https://github.com/dataarts/dat.gui>`_: "A lightweight graphical user interface for changing variables in JavaScript."
     
     As of 2023-02-27: dat.GUI's version is 0.7.9 (Latest on Feb 18, 2022)

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

Using ``dat.GUI``
=================
`:information_source:`

 - ``dat.GUI``'s GitHub: `github.com/dataarts/dat.gui <https://github.com/dataarts/dat.gui>`_
 - As of 2023-02-27: ``dat.GUI``'s version is 0.7.9 (Latest on Feb 18, 2022)
