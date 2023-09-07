'use client'

import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import React, { useEffect } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'
// import GLTF from '@/components/gltf'
export default function ModelViewer({ model }) {
  // if (model.url.endsWith('.gltf')) return <GLTF path={model.url} />
  const size = useWindowSize()
  useEffect(() => {
    let camera, scene, renderer

    const init = () => {
      const container = document.getElementById('container')

      camera = new THREE.PerspectiveCamera(45, size.width / size.height, 0.25, 20)
      camera.position.set(2.5, 1.5, 7.0)

      scene = new THREE.Scene()
      camera.lookAt(scene.position)

      new RGBELoader().setPath('').load(model.background, texture => {
        texture.mapping = THREE.EquirectangularReflectionMapping

        scene.environment = texture

        render()

        const loader = new GLTFLoader().setPath(model.dir || '')
        loader.load(model.url, gltf => {
          gltf.scene.scale.set(model.x, model.y, model.z)
          scene.add(gltf.scene)
          render()
        })
      })

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(size.width, size.height)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1
      container.appendChild(renderer.domElement)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.addEventListener('change', render)
      controls.minDistance = 2
      controls.maxDistance = 10
      controls.target.set(0, 0.5, -0.2)
      controls.update()
      onResize()
    }

    const onResize = () => {
      camera.aspect = size.width / size.height
      camera.updateProjectionMatrix()

      renderer.setSize(size.width, size.height)

      render()
    }

    const render = () => renderer.render(scene, camera)

    init()
    render()

    window.addEventListener('resize', onResize, false)

    return () => {
      window.removeEventListener('resize', onResize, false)
    }
  }, [model, size])

  return <div id='container'></div>
}
