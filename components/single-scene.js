'use client'

import { Krpano, Scene, View, Hotspot, Events } from '@0xllllh/react-krpano'

export default function SingleScene(props) {
  return (
    <Krpano currentScene='scene'>
      <Scene name='scene' images={props.images}>
        {(props.spots || []).map((spot, index) => (
          <Hotspot key={spot.name} {...spot} onClick={() => props.onSpotClick && props.onSpotClick?.(spot, index)} />
        ))}
      </Scene>

      <View
        fov={props.fov || 130}
        fovmin={props.fovmin || 30}
        fovmax={props.fovmax || 150}
        fovtype={props.fovtype || 'HFOV'}
      />

      <Events
        onClick={renderer => {
          const { krpanoRenderer } = renderer
          const { x, y, z } = krpanoRenderer.screentosphere(renderer.get('mouse.x'), renderer.get('mouse.y'))
          props.onClick && props.onClick({ x, y, z })
        }}
      />
    </Krpano>
  )
}
