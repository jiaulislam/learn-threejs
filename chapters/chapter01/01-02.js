import { AxesHelper, BoxGeometry, Color, Mesh, MeshBasicMaterial, PerspectiveCamera, PlaneGeometry, Scene, SphereGeometry, WebGLRenderer } from 'three';

export function init() {
  // Scene describes a placeholer where the WebGL is rendered
  let scene = new Scene();
  // Camera describes what will camera / eye see and how will it see it
  let camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  // WebGLRenderer is just a initiator of browser to tell the browser that this is a WebGLRenderer Component
  let renderer = new  WebGLRenderer();

  // set the background color of the renderer to black
  renderer.setClearColor(new Color(0x000000));
  // set the viewport of the renderer to window height & width of the browser
  renderer.setSize(window.innerWidth, window.innerHeight);
  // Bring the AXIS to the scene
  let axes = new AxesHelper(30);
  scene.add(axes);

  // create the two most required elements to create a mesh Geometry & Material
  // Geometry -> Describes how the object will look like in shape
  // Material -> Describes how the object will look like in visual perspective accents like color, solid or not etc
  let planeGeometry = new PlaneGeometry(60, 20);
  let planeMaterial = new MeshBasicMaterial({
    color: 0xAAAAAA
  });

  // Create a flat plane
  let plane = new Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(15,0,0);
  scene.add(plane);

  // create a cube
  let cubeGeometry =  new BoxGeometry(4,4,4);
  let cubeMaterial = new MeshBasicMaterial({
    color: 0xFF0000,
    wireframe: true
  });

  let cube = new Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(-4,3,0);
  scene.add(cube);
  // create a sphere
  let sphereGeometry = new SphereGeometry(4,20,20);
  let sphereMaterial = new MeshBasicMaterial({
    color: 0x7777FF,
    wireframe: true
  });

  let sphere = new Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(20,4,2);
  scene.add(sphere);

  // position & point the camera to the center of the scene
  camera.position.set(-30, 40, 30);
  camera.lookAt(scene.position);

  // append the scene to the app div on the html
  document.querySelector('#app').appendChild(renderer.domElement);

  // render the scene
  renderer.render(scene, camera);
}