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
