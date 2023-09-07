'use client'
import { getScenes } from '@/utils/mock'
import { useState, useEffect } from 'react'
import ScenesSwitch from '@/components/scenes-switch'
import ModelViewer from '@/components/model-viewer'
import Loading from '@/components/loading'
import FullFixedWrapper from '@/components/full-fixed-wrapper'
import { Krpano, Scene, View, Hotspot, Events } from '@0xllllh/react-krpano'

export default function App() {
  const [scenes, setScenes] = useState([])
  const [loading, setLoading] = useState(false)
  const [scene, setScene] = useState('')
  const [model, setModel] = useState({})

  useEffect(() => {
    setLoading(true)
    getScenes().then(data => {
      setScenes(data)
      setScene(data[0].name)
      setLoading(false)
    })
  }, [])

  if (loading || !scenes.length) return <Loading />

  return (
    <div>
      {model.url ? (
        <FullFixedWrapper className='flex items-center justify-center'>
          <ModelViewer model={model} />

          <button
            className='fixed left-[20px] z-[99999999999999] top-[20px] bg-[#0F0F0F] text-[#fff] px-[15px] py-[8px] rounded-md'
            onClick={() => setModel({})}
          >
            返回
          </button>
        </FullFixedWrapper>
      ) : (
        <ScenesSwitch
          value={scene}
          onChange={scene => setScene(scene.name)}
          className='fixed !h-[100px] w-1/2 bottom-[20px] z-[20]'
          scenes={scenes}
        />
      )}

      <Krpano currentScene={scene}>
        {scenes.map(scene => {
          const { spots = [], images = [], name } = scene
          return (
            <Scene key={name} name={name} images={images}>
              {spots.map(spot => {
                return <Hotspot key={spot.name} {...spot} onClick={() => setModel(spot.data)} />
              })}
            </Scene>
          )
        })}

        <View fov={90} fovmin={80} fovmax={120} />

        <Events
          onClick={renderer => {
            console.log(renderer)
          }}
        />
      </Krpano>
    </div>
  )
}
