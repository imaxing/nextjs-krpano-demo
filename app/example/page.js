'use client'

import { Krpano, Scene, View } from '@0xllllh/react-krpano'
import Script from 'next/script'
export default function Package() {
  return (
    <div>
      <Script src='https://0xllllh.github.io/react-krpano-examples/krpano.js'></Script>
      <Krpano currentScene='scene0'>
        <Scene
          name='scene0'
          images={[
            {
              type: 'cube',
              url: 'https://qhyxpicoss.kujiale.com/r/2017/09/01/L3D221IS3QKUQUQBOGAPEK3P3XU888_7500x1250.jpg_%s'
            }
          ]}
        />
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
