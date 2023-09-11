'use client'

import { Krpano, Scene, View, Hotspot, Events } from '@0xllllh/react-krpano'

export default function SingleScene(props) {
  return (
    <Krpano currentScene='scene'>
      <Scene name='scene' images={props.images}>
        {props.spots?.map((spot, index) => (
          <Hotspot key={spot.name} {...spot} onClick={() => props.onSpotClick?.(spot, index)} />
        ))}
      </Scene>

      <View fov={90} fovmin={80} fovmax={120} />

      <Events
        onClick={renderer => {
          const { krpanoRenderer } = renderer
          const { x, y, z } = krpanoRenderer.screentosphere(renderer.get('mouse.x'), renderer.get('mouse.y'))
          props.onClick?.({ x, y, z })
        }}
      />
    </Krpano>
  )
}
