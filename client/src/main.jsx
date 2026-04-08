import * as THREE from 'three';
import { highpModelNormalViewMatrix } from 'three/src/nodes/accessors/ModelNode.js';
const scene=new THREE.Scene();
const cubeGemotry=new THREE.BoxGeometry(1,1,1)
const cubeMaterial=new THREE.MeshBasicMaterial({color:"red"})

const cubeMesh=new THREE.Mesh(cubeGemotry,
  cubeMaterial)
console.log(cubeMesh)
  console.log(scene)
  scene.add(cubeMesh)

  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  camera.position.z=5;
   scene.add(camera)
const canvas=document.querySelector('canvas.threejs')
const renderer= new THREE.WebGLRenderer({canvas:canvas})
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.render(scene,camera)
console.log(canvas)




//1.04



















/* import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 */
