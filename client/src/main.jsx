import * as THREE from 'three';
import './index.css'
import {OrbitControls}  from 'three/addons/controls/OrbitControls.js'

const scene=new THREE.Scene();
const cubeGemotry=new THREE.BoxGeometry(1,1,1)
const cubeMaterial=new THREE.MeshBasicMaterial({color:"red"})

const cubeMesh=new THREE.Mesh(cubeGemotry,
  cubeMaterial)
console.log(cubeMesh)
  console.log(scene)   
  scene.add(cubeMesh)

  const camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 3, 200);
  camera.position.z=5;
   scene.add(camera)
const canvas=document.querySelector('canvas.threejs')

const renderer= new THREE.WebGLRenderer({canvas:canvas})
const controls=new OrbitControls(camera,canvas)
controls.enableDamping =true
controls.autoRotate= true
const renderloop=()=>{
  renderer.render(scene,camera)

window.requestAnimationFrame(renderloop)
  controls.update()
}

renderloop()
renderer.setSize(window.innerWidth,window.innerHeight)

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
