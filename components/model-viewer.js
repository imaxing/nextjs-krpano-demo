'use client'

import React, { Suspense } from 'react'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'

export default function ModelViewer({ path }) {
  const { scene } = useLoader(GLTFLoader, path)

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 10, 10]} />
      <Suspense fallback={null}>{scene ? <primitive object={scene} /> : null}</Suspense>
    </Canvas>
  )
}
