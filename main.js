import { makeCircle } from './circle.js';
import { Scene, WebGLRenderer, PerspectiveCamera } from 'three';
const scene = new Scene();
const camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 4000);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(devicePixelRatio);
// Box(scene, camera, renderer);

makeCircle(scene, camera, renderer);
