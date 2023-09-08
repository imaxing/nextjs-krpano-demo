'use client'
import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment, Html, useProgress } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function ModelViewer({ model }) {
  const { nodes, /* materials,*/ scene } = useLoader(GLTFLoader, model.url)
  console.log(nodes)
  const { progress } = useProgress()
  return (
    <Canvas>
      <Suspense fallback={<Html center>{progress} % loaded</Html>}>
        <primitive object={scene} scale={model.url.endsWith('.glb') ? 0.3 : 1} />
        <OrbitControls autoRotate />
        <Environment preset='sunset' />
      </Suspense>
    </Canvas>
  )
}
