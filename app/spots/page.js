'use client'

import dynamic from 'next/dynamic'
import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'
const SingleScene = dynamic(() => import('@/components/single-scene'))

export default function HotSpots(props) {
  const [spots, setSpots] = useState(props.spots || [])
  const onCreteHotSpot = useCallback(({ x, y, z }) => {
    setSpots(spots => [
      ...spots,
      {
        name: `spot-${spots.length + 1}`,
        ath: x,
        atv: y,
        url: `https://www.yeecai.com/cheshi/single_home/common/linemarker1/${spots.length + 1}.png`,
        width: 40,
        height: 40,
        scale: 1
      }
    ])
  }, [])

  const [images] = useState([
    {
      type: 'cube',
      url: 'https://qhyxpicoss.kujiale.com/r/2017/09/01/L3D221IS3QKUQUQBOGAPEK3P3XU888_7500x1250.jpg_%s'
    }
  ])

  return <SingleScene images={images} spots={spots} onClick={onCreteHotSpot} onSpotClick={spot => toast(spot.name)} />
}
