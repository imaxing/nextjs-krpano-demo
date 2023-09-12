import { useState, useCallback } from 'react'
import { toast } from 'react-toastify'
import SingleScene from '@/components/single-scene'

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
        height: 40
      }
    ])
  }, [])

  const [images] = useState([
    {
      type: 'cube',
      url: 'https://qhyxpicoss.kujiale.com/r/2017/12/25/L3D221I5P2YEIUG5TL4MUG3P3XE888_7500x1250.jpg_%s'
    }
  ])

  return (
    <SingleScene
      fovmin={140}
      fovmax={140}
      images={images}
      spots={spots}
      onClick={onCreteHotSpot}
      onSpotClick={spot => toast(spot.name)}
    />
  )
}
