================
Testing three.js
================      
.. contents:: **Contents**
   :depth: 5
   :local:
   :backlinks: top

``three.js`` **CDN** library files
==================================
`:warning:` When linking ``three.js`` from a CDN @ cdnjs.cloudflare.com, I get the following warning message::

 Scripts "build/three.js" and "build/three.min.js" are deprecated with r150+, and 
 will be removed with r160. Please use ES Modules or alternatives: 
 https://threejs.org/docs/index.html#manual/en/introduction/Installation

As it is recommended in the warning message, use ES Modules (see official `doc
<https://threejs.org/docs/index.html#manual/en/introduction/Installation>`_).

|

`:information_source:` `three.js CDN library files <https://cdnjs.com/libraries/three.js>`_

**Example:**

.. code-block:: html

   <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.150.1/three.min.js"></script>

**NOTE:** add the rest of ``<script>``'s attributes, i.e. ``integrity="sha512..."``

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
         <script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.9/dat.gui.min.js"></script>
      </head>
      <body>
         <!-- The threejs-container takes up the whole screen. -->
         <div id="threejs-container">
            <!-- Our output to be rendered here -->
         </div>
         <script async src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"></script>
         <script type="importmap">
           {
             "imports": {
               "three": "https://unpkg.com/three@0.150.1/build/three.module.js",
               "three/addons/": "https://unpkg.com/three@0.150.1/examples/jsm/"
             }
           }
         </script>
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

   import * as THREE from 'three';
   
   // UI
   const gui = new dat.GUI()
   // sizes
   let width = window.innerWidth
   let height = window.innerHeight

   // scene
   const scene = new THREE.Scene()
   scene.background = new THREE.Color(0x000000)

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

Cameras
=======
PerspectiveCamera
-----------------
OrthographicCamera
------------------

Drawing geometric shapes
========================
Drawing lines
-------------
.. raw:: html

  <p align="center">
    <a href="https://jsfiddle.net/raul23/54qtakvj/30/" target="_blank">
      <img src="./images/drawing_lines.png">
    </a>
  </p>
  
`:information_source:` 

 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/54qtakvj/30/>`_ (added comments from the tutorial)
 - Code from `Drawing lines (threejs.org) <https://threejs.org/docs/index.html#manual/en/introduction/Drawing-lines>`_

Drawing cubes
-------------
Wireframe cube
""""""""""""""
Static
''''''
.. raw:: html

  <p align="center">
    <a href="https://jsfiddle.net/raul23/Lywna1pj/55/" target="_blank">
      <img src="./images/hello_cube_app.png">
    </a>
  </p>

`:information_source:` 

 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/Lywna1pj/55/>`_ (added comments from the tutorial)
 - Code from `Three.js - Hello Cube App (tutorialspoint.com) <https://www.tutorialspoint.com/threejs/threejs_hello_cube_app.htm>`_

Spinning + responsiveness
'''''''''''''''''''''''''
.. raw:: html

  <p align="center">
    <a href="https://jsfiddle.net/raul23/56keob9d/34/" target="_blank">
      <img src="./images/spinning_wireframe_cube.png">
    </a>
  </p>

`:information_source:` 

 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/56keob9d/34/>`_ (added comments from the tutorial)
 - Code from `Three.js - Responsive Design (tutorialspoint.com) <https://www.tutorialspoint.com/threejs/threejs_responsive_design.htm>`_
 - **Responsiveness:**
 
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
"""""""""""""""""""
.. raw:: html

  <p align="center">
    <a href="https://jsfiddle.net/raul23/0zwtbd12/8" target="_blank">
      <img src="./images/spinning_cube.png">
    </a>
  </p>
  
`:information_source:` 

 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/0zwtbd12/8>`_ (added comments from the tutorial)
 - Code from `Creating a scene (threejs.org) <https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene>`_

Add multiple cubes in a scene
"""""""""""""""""""""""""""""
.. raw:: html

  <p align="center">
    <a href="https://jsfiddle.net/raul23/pze9obf5/92/" target="_blank">
      <img src="./images/multiple_cubes.png">
    </a>
  </p>
  
`:information_source:` 

 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/pze9obf5/92/>`_
 - Code from `Three.js - Renderer & Responsiveness (tutorialspoint.com) 
   <https://www.tutorialspoint.com/threejs/threejs_renderer_and_responsiveness.htm>`_
 - **NOTES:**
 
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

Special effects
===============
Add fog to a scene
------------------
.. raw:: html

  <p align="center">
    <img src="./images/fog.png">
  </p>

`:information_source:` 

 - From `Three.js - Renderer & Responsiveness (tutorialspoint.com) <https://www.tutorialspoint.com/threejs/threejs_renderer_and_responsiveness.htm>`_
 - Example: black fog (``0x000000``) that increases linearly
 
   .. code-block:: javascript

      scene.fog = new THREE.Fog(0x000000, 0.015, 100)
      
   "You can use the preceding two properties to tune how the mist appears. The 0.015 value sets the near property, 
   and the 100 value sets the far property. With these properties, you can determine where the fog starts and how 
   fast it gets denser."
 - Example: black fog (``0x000000``) that increases exponentially with a mist's density of 0.01

   .. code-block:: javascript
  
      scene.fog = new THREE.FogExp2(0x000000, 0.01)

Anti-aliasing
-------------
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

 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/uc6rbLg2/13/>`_ (added comments from the tutorial)
 - Code from `Three.js - Responsive Design (tutorialspoint.com) <https://www.tutorialspoint.com/threejs/threejs_hello_cube_app.htm>`_
 - **NOTES:**
 
   - "The aliasing effect is the appearance of jagged edges or "jaggies" (also known as stair-stepped lines) 
     on edges and objects (rendered using pixels)."
     
     .. code-block:: javascript
        
        const renderer = new WebGLRenderer({ antialias: true })
        renderer.physicallyCorrectLights = true

     "The property ``physicallyCorrectLights`` tells Three.js whether to use physically correct lighting mode. 
     Default is false. Setting it to true helps increase the detail of the object."

``dat.GUI``
===========
Using ``dat.GUI`` to change a cube's coordinates
------------------------------------------------
.. raw:: html

  <p align="center">
    <a href="https://jsfiddle.net/raul23/pqux2cka/24/" target="_blank">
      <img src="./images/dat_gui.png">
    </a>
  </p>

`:information_source:` about ``dat.GUI``

 - ``dat.GUI``'s GitHub: `github.com/dataarts/dat.gui <https://github.com/dataarts/dat.gui>`_
 - As of 2023-02-27: ``dat.GUI``'s version is 0.7.9 (Latest on Feb 18, 2022)

|

`:information_source:` about the JavaScript code

 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/pqux2cka/24/>`_
 - Code from `Three.js - Debug & Stats (tutorialspoint.com) <https://www.tutorialspoint.com/threejs/threejs_debug_and_stats.htm>`_
 - **NOTES:**
 
   - A GUI is added to move the cube by modifying its x, y, and z positions:
   
     **HTML:**
     
     .. code-block:: html
   
        <script src="https://cdnjs.cloudflare.com/ajax/libs/dat-gui/0.7.9/dat.gui.min.js">
   
     **JavaScript:**
     
     .. code-block:: javascript
     
        const gui = new dat.GUI();
        gui.add(material, 'wireframe')
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)
        gui.add(cube.position, 'x')
        gui.add(cube.position, 'y')
        ui.add(cube.position, 'z')
        
     `dat.GUI's GitHub <https://github.com/dataarts/dat.gui>`_: "A lightweight graphical user interface for changing variables in JavaScript."
     
     As of 2023-02-27: dat.GUI's version is 0.7.9 (Latest on Feb 18, 2022) 
     
   - A slider (min, max, and step values) can also be used to change the cube's coordinates:
   
     .. code-block:: javascript
        
        // With slider
        gui.add(cube.position, 'x').min(-10).max(10).step(0.1)
        gui.add(cube.position, 'y').min(-10).max(10).step(0.1)
        gui.add(cube.position, 'z').min(-10).max(10).step(0.1)
        
``dat.GUI`` folders
-------------------
.. raw:: html

  <p align="center">
    <a href="https://jsfiddle.net/raul23/7q9kwob2/27/" target="_blank">
      <img src="./images/dat_gui_folders.png">
    </a>
  </p>
  
`:information_source:` about the JavaScript code

 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/7q9kwob2/27/>`_
 - Code from `Three.js - Debug & Stats (tutorialspoint.com) <https://www.tutorialspoint.com/threejs/threejs_debug_and_stats.htm>`_
 - **NOTES:**
 
   - "If there are many variables with the same name, you may find it difficult to differentiate among them. 
     In that case, you can add folders for every object. All the variables related to an object [will] be in one folder."
     
     .. code-block:: javascript
     
        // creating a folder
        const cube1 = gui.addFolder('Cube 1')
        cube1.add(redCube.position, 'y').min(1).max(10).step(1)
        cube1.add(redCube.position, 'x').min(1).max(10).step(1)
        cube1.add(redCube.position, 'z').min(1).max(10).step(1)
        // another folder
        const cube2 = gui.addFolder('Cube 2')
        cube2.add(greenCube.position, 'y').min(1).max(10).step(1)
        cube2.add(greenCube.position, 'x').min(1).max(10).step(1)
        cube2.add(greenCube.position, 'z').min(1).max(10).step(1)

``onChange`` callback: e.g. changing a cube's color through the GUI
-------------------------------------------------------------------
.. raw:: html

   <p align="center">
    <a href="https://jsfiddle.net/raul23/7q9kwob2/27/" target="_blank">
      <img src="./images/dat_gui_folders.png">
    </a>
   </p>
  
`:information_source:` 

 - **Code:** `jsfiddle.net <https://jsfiddle.net/raul23/7q9kwob2/27/>`_
 - Code from `Three.js - Debug & Stats (tutorialspoint.com) <https://www.tutorialspoint.com/threejs/threejs_debug_and_stats.htm>`_
 - **NOTES:**
 
   "The callback ``onChange`` notifies three.js to change the cube color when the color from ``cubeColor`` changes."
   
   .. code-block:: javascript
   
      // parameter
      const cubeColor = {
         color: 0xff0000,
      }
      gui.addColor(cubeColor, 'color').onChange(() => {
         // callback
         cube.color.set(cubeColor.color)
      })

``stats.js``: JavaScript Performance Monitor
============================================
`:information_source:`

 - GitHub @ https://github.com/mrdoob/stats.js/
 - As of 2023-02-27, its latest version is **r17** (Latest on Oct 28, 2016)
 - **CDN link:** @ https://cdnjs.com/libraries/stats.js
 
   .. code-block:: html
 
      <script src="https://cdnjs.cloudflare.com/ajax/libs/stats.js/r17/Stats.min.js"></script>
      
   `:warning:` 
   
    - When I try r17, I get ``"Script error."`` on `jsfiddle.net <https://jsfiddle.net/raul23/7q9kwob2/27/>`_
    - When I try r16 and lower versions, I get ``"Uncaught TypeError: Failed to execute 'appendChild' on 'Node': 
      parameter 1 is not of type 'Node'."`` on `jsfiddle.net <https://jsfiddle.net/raul23/7q9kwob2/27/>`_
    - **SOLUTION:** Use ``stats.min`` from https://mrdoob.github.io/stats.js/build/stats.min.js
    
      .. code-block:: html
    
         <script src="https://mrdoob.github.io/stats.js/build/stats.min.js"></script>
 - From their `GitHub <https://github.com/mrdoob/stats.js/>`_:
 
   This class provides a simple info box that will help you monitor your code performance.

   - **FPS** [0] Frames rendered in the last second. The higher the number the better.
   - **MS** [1] Milliseconds needed to render a frame. The lower the number the better.
   - **MB** [2] MBytes of allocated memory. (Run Chrome with --enable-precise-memory-info)
   - **CUSTOM** [3+] User-defined panel support.

Usage
-----
.. raw:: html

   <p align="center">
    <a href="https://jsfiddle.net/raul23/zrLng97f/70/" target="_blank">
      <img src="./images/stats_js.png">
    </a>
   </p>

.. code-block:: javascript

   var stats = new Stats();
   stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
   document.body.appendChild( stats.dom );

   function animate() {

      stats.begin();

      // monitored code goes here, e.g. the render function
      // renderer.render(scene, camera)

      stats.end();

      requestAnimationFrame( animate );

   }

   requestAnimationFrame( animate );

|

"If you are using animations, you should update the stats whenever the frame is rendered." (from `tutorialspoint.com
<https://www.tutorialspoint.com/threejs/threejs_stats.htm>`_):

.. code-block:: javascript

   function animate() {
      requestAnimationFrame(render)
      // our animations
      renderer.render(scene, camera)
      stats.update()
   }
