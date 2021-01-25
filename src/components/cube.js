import React, { useRef } from 'react'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import { Canvas, useThree, extend, useFrame  } from 'react-three-fiber'

extend({OrbitControls})



const Box = (props) => {
  const mesh = useRef()
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })
  return (
    <mesh
    {...props} ref={mesh}>
      
      <boxBufferGeometry attach="geometry" args={[2,2,2]}/>
      <meshStandardMaterial attach="material" color="red"/>
    </mesh>
  )
}



const Scene = () => {
  const {
    camera,
    gl: {
      domElement
    }
  } = useThree()



  return (
    <>
    <ambientLight/>
    <pointLight intensity={0.3} position={[-1, 2, 4]}/>
    <Box/>
    <orbitControls args={[camera, domElement]}/>
    </>
  )
}


const Cube = () => {
  return (
    <Canvas style={{width: `100px`}}>
      <Scene/>
    </Canvas>
  )
}

export default Cube