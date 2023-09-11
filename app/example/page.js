'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
const ModelPreview = dynamic(() => import('@/components/model-preview'))
const SingleScene = dynamic(() => import('@/components/single-scene'))

export default function App() {
  const [model, setModel] = useState({})
  const [images] = useState([
    {
      type: 'cube',
      url: 'https://qhyxpicoss.kujiale.com/r/2017/09/01/L3D221IS3QKUQUQBOGAPEK3P3XU888_7500x1250.jpg_%s'
    }
  ])
  const [spots] = useState([
    {
      model: 'https://www.yeecai.com/cheshi/ar/module/test1.glb',
      name: 'hotspot1',
      type: 'image',
      ath: -30,
      atv: 20,
      url: `${process.env.BASE_PATH}/static/hotspot.png`
    },
    {
      model: 'https://www.yeecai.com/cheshi/models/Model.glb',
      name: 'hotspot2',
      type: 'image',
      ath: 0,
      atv: 20,
      url: `${process.env.BASE_PATH}/static/hotspot.png`
    },
    {
      model: `${process.env.BASE_PATH}/static/tree.gltf`,
      name: 'hotspot3',
      type: 'image',
      ath: 30,
      atv: 20,
      url: `${process.env.BASE_PATH}/static/hotspot.png`
    }
  ])

  return (
    <div>
      {model.url && <ModelPreview model={model} onBack={() => setModel({})} />}
      <SingleScene onSpotClick={spot => setModel({ url: spot.model })} images={images} spots={spots} />
    </div>
  )
}
