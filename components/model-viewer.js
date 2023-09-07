'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'

export default function ModelViewer() {
  const { scene } = useLoader(GLTFLoader, '/tree.gltf')

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>{scene ? <primitive object={scene} /> : null}</Suspense>
    </Canvas>
  )
}
