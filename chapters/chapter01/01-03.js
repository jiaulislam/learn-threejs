import {
  AmbientLight, BoxGeometry, Color,
  Mesh,
  MeshLambertMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Scene,
  SphereGeometry,
  SpotLight,
  Vector2,
  WebGLRenderer
} from 'three';

export function init() {
  // Scene describes a placeholer where the WebGL is rendered
  let scene = new Scene();
  // Camera describes what will camera / eye see and how will it see it
  let camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // WebGLRenderer is just a initiator of browser to tell the browser that this is a WebGLRenderer Component
  let renderer = new WebGLRenderer();

  // set the background color of the renderer to black
  renderer.setClearColor(new Color(0x000000));
  // set the viewport of the renderer to window height & width of the browser
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;

  // create the two most required elements to create a mesh Geometry & Material
  // Geometry -> Describes how the object will look like in shape
  // Material -> Describes how the object will look like in visual perspective accents like color, solid or not etc
  let planeGeometry = new PlaneGeometry(60, 20);
  let planeMaterial = new MeshLambertMaterial({
    color: 0xaaaaaa,
  });

  // Create a flat plane
  let plane = new Mesh(planeGeometry, planeMaterial);
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.set(15, 0, 0);
  scene.add(plane);

  // create a cube
  let cubeGeometry = new BoxGeometry(4, 4, 4);
  let cubeMaterial = new MeshLambertMaterial({
    color: 0xff0000,
  });

  let cube = new Mesh(cubeGeometry, cubeMaterial);
  cube.position.set(-3, 3, 0);
  scene.add(cube);
  // create a sphere
  let sphereGeometry = new SphereGeometry(4, 20, 20);
  let sphereMaterial = new MeshLambertMaterial({
    color: 0x7777ff,
  });

  let sphere = new Mesh(sphereGeometry, sphereMaterial);
  sphere.position.set(20, 4, 2);
  scene.add(sphere);

  // position & point the camera to the center of the scene
  camera.position.set(-30, 40, 30);
  camera.lookAt(scene.position);

  // shadow propertise
  let spotLight = new SpotLight(0xFFFFFF);
  spotLight.position.set(-40, 60, -10);
  spotLight.castShadow = true;
  spotLight.shadow.mapSize = new Vector2(1024, 1024);
  spotLight.shadow.camera.far = 110;
  spotLight.shadow.camera.near = 40;
  plane.receiveShadow = true;
  cube.castShadow = true;
  sphere.castShadow = true;
  scene.add(spotLight);

  let ambienLight = new AmbientLight(0x353535);
  scene.add(ambienLight);


  // append the scene to the app div on the html
  document.querySelector('#app').appendChild(renderer.domElement);
  // render the scene
  renderer.render(scene, camera);
}
