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
 
/*   const asceptRatio= window.innerWidth / window.innerHeight

  const camera=new THREE.OrthographicCamera(-1*asceptRatio,1*asceptRatio,1,-1,0.1,200) */
  camera.position.z=5;

   scene.add(camera)
const canvas=document.querySelector('canvas.threejs')
console.log(window.devicePixelRatio)
const renderer= new THREE.WebGLRenderer({canvas:canvas,
  antialias:true
})
const controls=new OrbitControls(camera,canvas)
controls.enableDamping =true
controls.autoRotate= true
window.addEventListener('resize',()=>{
  camera.aspect=window.innerWidth/window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth,window.innerHeight)
  const maxPixelRatio=Math.min(window.devicePixelRatio,2)
  renderer.setPixelRatio(maxPixelRatio)

})
const renderloop=()=>{
 
  renderer.render(scene,camera)

window.requestAnimationFrame(renderloop)

  controls.update()
}

renderloop()

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
