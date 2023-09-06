'use client'
import Script from 'next/script'
import { getScenes } from '@/utils/mock'
import { useState, useEffect } from 'react'
import ScenesSwitch from '@/components/scenes-switch'
import { Krpano, Scene, View, Hotspot, Events } from '@0xllllh/react-krpano'

export default function App() {
  const [scenes, setScenes] = useState([])
  const [loading, setLoading] = useState(false)
  const [scene, setScene] = useState('')
  const [showIframe, setShowIframe] = useState('')
  const [showBackButton, setShowBackButton] = useState(false)

  useEffect(() => {
    setLoading(true)
    getScenes().then(data => {
      setScenes(data)
      setScene(data[0].name)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return (
      <div
        style={{ background: 'rgba(0, 0, 0, 0.8)' }}
        className='fixed w-screen h-screen left-0 top-0 z-[20] flex items-center justify-center text-[#fff]'
      >
        loading...
      </div>
    )
  }
  return (
    <div>
      {
        // eslint-disable-next-line @next/next/no-before-interactive-script-outside-document
        <Script strategy='beforeInteractive' src='https://0xllllh.github.io/react-krpano-examples/krpano.js'></Script>
      }

      {showBackButton && (
        <button
          className='fixed left-[20px] z-[11] top-[20px] bg-[#0F0F0F] text-[#fff] px-[15px] py-[8px] rounded-md'
          onClick={() => {
            setShowIframe('')
            setShowBackButton(false)
          }}
        >
          返回
        </button>
      )}

      {showIframe && (
        <div className='fixed w-screen h-screen left-0 top-0 z-10'>
          <iframe
            onLoad={() => setShowBackButton(true)}
            className='w-full h-full'
            src={`https://www.720yun.com/3dm/${showIframe}`}
          />
        </div>
      )}

      <ScenesSwitch
        value={scene}
        onChange={scene => setScene(scene.name)}
        className='fixed !h-[100px] w-1/2 bottom-[20px] z-[20]'
        scenes={scenes}
      />

      <Krpano currentScene={scene}>
        {scenes.map(scene => {
          const { spots = [], images = [], name } = scene
          return (
            <Scene key={name} name={name} images={images}>
              {spots.map(spot => {
                return <Hotspot key={spot.name} {...spot} onClick={() => setShowIframe(spot.data)} />
              })}
            </Scene>
          )
        })}

        <View fov={90} fovmin={80} fovmax={120} />

        <Events
          onClick={renderer => {
            console.log(renderer)
            // renderer.addHotspot('hot' + Date.now(), {
            //   type: 'image',
            //   url: 'https://0xllllh.github.io/krpano-examples/images/hotspot.png'
            // })
          }}
        />
      </Krpano>
    </div>
  )
}
