export const getScenes = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          name: '场景一',
          images: [
            {
              type: 'cube',
              url: 'https://qhyxpicoss.kujiale.com/r/2017/09/01/L3D221IS3QKUQUQBOGAPEK3P3XU888_7500x1250.jpg_%s'
            }
          ],
          spots: [
            {
              data: {
                background: 'https://threejs.org/examples/textures/equirectangular/royal_esplanade_1k.hdr',
                url: 'https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf',
                x: 2.0,
                y: 2.0,
                z: 2.0
              },
              name: 'hotspot0',
              type: 'image',
              ath: -50,
              atv: 10,
              url: 'https://0xllllh.github.io/krpano-examples/images/hotspot.png'
            },
            {
              data: {
                background: 'https://threejs.org/examples/textures/equirectangular/royal_esplanade_1k.hdr',
                dir: '/model',
                url: '/demo.glb',
                x: 100,
                y: 100,
                z: 100
              },
              name: 'hotspot1',
              type: 'image',
              ath: 0,
              atv: 10,
              url: 'https://0xllllh.github.io/krpano-examples/images/hotspot.png'
            }
          ]
        },
        {
          name: '场景二',
          images: [
            {
              type: 'cube',
              url: 'https://qhyxpicoss.kujiale.com/r/2017/09/01/L3D221IS3QKUQUQBOGAPEK3P3XU888_7500x1250.jpg_%s'
            }
          ],
          spots: [
            {
              data: {
                background:
                  'https://www.yeecai.com/cheshi/ar/three.js-dev/examples/textures/equirectangular/quarry_01_1k.hdr',
                url: 'https://www.yeecai.com/cheshi/ar/three.js-dev/examples/models/gltf/MaterialsVariantsShoe/glTF/MaterialsVariantsShoe.gltf',
                x: 5.0,
                y: 5.0,
                z: 5.0
              },
              name: 'hotspot0',
              type: 'image',
              ath: 50,
              atv: 10,
              url: 'https://0xllllh.github.io/krpano-examples/images/hotspot.png'
            }
          ]
        }
      ])
    }, 1000)
  })
}
