import { DoubleSide, BoxGeometry, Mesh, MeshBasicMaterial, CircleGeometry } from 'three';


/**
 * Render a Box on the box
 * @param {*} scene 
 * @param {*} camera 
 * @param {*} renderer 
 */
export function Box(scene, camera, renderer) {

  document.body.appendChild(renderer.domElement);

  const geometry = new BoxGeometry(2, 2, 2);
  const material = new MeshBasicMaterial({ color: 0x0000ff });
  const cube = new Mesh(geometry, material);

  scene.add(cube);

  camera.position.z = 5;

  function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }

  animate();
}

/**
 * Render a circle on the box 
 */

export function makeCircle(scene, camera, renderer) {
  document.body.appendChild(renderer.domElement);
  const geometry = new CircleGeometry(1, 10, 0, 6.283185307179586);
  const material = new MeshBasicMaterial({ color: 0xffAE00, side: DoubleSide });
  const circle = new Mesh(geometry, material);

  scene.add(circle);
  camera.position.x = 2;
  camera.position.y = -0.5;
  camera.position.z = 10;
  // camera.position.y = 1;
  // camera.position.z = 1;

  function animate() {
    requestAnimationFrame(animate);

    circle.rotation.x += 0.01;
    circle.rotation.y += 0.02;

    renderer.render(scene, camera);
  }
  // renderer.render(scene, camera);
  animate();
}