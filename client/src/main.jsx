import * as THREE from 'three';
import './index.css'
import {OrbitControls}  from 'three/addons/controls/OrbitControls.js'

const scene=new THREE.Scene();
const cubeGemotry=new THREE.BoxGeometry(1,1,1)
const cubeMaterial=new THREE.MeshBasicMaterial({color:"red",wireframe:true})

const cubeMesh=new THREE.Mesh(cubeGemotry,
  cubeMaterial)
                                                                 const cubeMesh2=new THREE.Mesh(cubeGemotry,
  cubeMaterial)
  const cubeMesh3=new THREE.Mesh(cubeGemotry,
  cubeMaterial)
                 cubeMesh2.position.x=2
                 cubeMesh3.position.x=-2
              const group=new THREE.Group()
              group.scale.y=2
              cubeMesh2.position.y=1
              cubeMesh3.position.y=-1
              group.add(cubeMesh)
              group.add(cubeMesh2)
              group.add(cubeMesh3)             
console.log(cubeMesh)
  console.log(scene)   
   scene.add(group)

 /*  scene.add(cubeMesh) */
/* cubeMesh.position.y=1
cubeMesh.position.x=1
cubeMesh.position.z=1 */
/* cubeMesh.scale.set(2,2,1) */
const axesHelper = new THREE.AxesHelper(2); 
scene.add(axesHelper);
console.log(cubeMesh)
/* 
const tempVector=new THREE.Vector3(0,1,0)  
cubeMesh.position.copy(tempVector) */
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
