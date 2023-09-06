'use client'

import { useState } from 'react'
import Script from 'next/script'
import { Krpano, Scene, View, Hotspot } from '@0xllllh/react-krpano'

export default function App() {
  const [showIframe, setShowIframe] = useState(false)
  const [showBackButton, setShowBackButton] = useState(false)
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
            setShowIframe(false)
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
            src='https://www.720yun.com/3dm/f92ma30lnsf'
          />
        </div>
      )}
      <Krpano currentScene='scene0'>
        <Scene
          name='scene0'
          images={[
            {
              type: 'cube',
              url: 'https://qhyxpicoss.kujiale.com/r/2017/09/01/L3D221IS3QKUQUQBOGAPEK3P3XU888_7500x1250.jpg_%s'
            }
          ]}
        >
          <Hotspot
            name='hotspot0'
            type='image'
            url='https://0xllllh.github.io/krpano-examples/images/hotspot.png'
            ath={-50}
            atv={20}
            onClick={() => setShowIframe(true)}
          />
        </Scene>
        <Scene
          name='scene1'
          images={[
            {
              type: 'cube',
              url: 'https://qhyxpicoss.kujiale.com/r/2017/09/01/L3D221IS3QKUQUQBOGAPEK3P3XU888_7500x1250.jpg_%s'
            }
          ]}
        />
        <View fov={90} fovmin={80} fovmax={120} />
      </Krpano>
    </div>
  )
}
