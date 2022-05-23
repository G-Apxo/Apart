// import React, { Suspense } from 'react'
// import {useRef, useState} from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, useGLTF } from '@react-three/drei'
// import TestShoe from './shoe.gltf'
// function Model({ ...props }) {
//     const group = useRef()
//     const { nodes, materials } = useGLTF(TestShoe)
//     return (
//       <group ref={group} {...props} dispose={null} scale={3}>
//         <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
//         <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
//         <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
//         <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
//         <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
//         <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
//         <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
//         <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
//       </group>
//     )
//   }
//   useGLTF.preload('/shoe.gltf')

// function Test() {
//     const ref=useRef()
//   return (
//     <div>
//         <Canvas>
//             <Suspense fallback={null}>
//                 <ambientLight />
//                 <Model />
//             </Suspense>
//         </Canvas>
//     </div>
//   )
// }

// export default Test