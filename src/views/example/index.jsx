import { useState, Suspense } from 'react'
import ModelPreview from '@/components/model-preview'
import SingleScene from '@/components/single-scene'
import HotSpotImage from '@/assets/hotspot.png'
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
      url: HotSpotImage
    },
    {
      model: 'https://www.yeecai.com/cheshi/models/Model.glb',
      name: 'hotspot2',
      type: 'image',
      ath: 0,
      atv: 20,
      url: HotSpotImage
    }
  ])

  return (
    <div>
      {model.url && (
        <Suspense fallback={<div>loading</div>}>
          <ModelPreview model={model} onBack={() => setModel({})} />
        </Suspense>
      )}
      <SingleScene onSpotClick={spot => setModel({ url: spot.model })} images={images} spots={spots} />
    </div>
  )
}
