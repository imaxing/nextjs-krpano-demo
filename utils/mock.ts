export const getScenes = () => {
  return new Promise(resolve => {
    const hotspot = `${process.env.BASE_PATH}/static/hotspot.png`
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
                url: 'https://www.yeecai.com/cheshi/ar/module/test1.glb'
              },
              name: 'hotspot1',
              type: 'image',
              ath: -30,
              atv: 20,
              url: hotspot
            },
            {
              data: {
                url: 'https://www.yeecai.com/cheshi/models/Model.glb'
              },
              name: 'hotspot2',
              type: 'image',
              ath: 0,
              atv: 20,
              url: hotspot
            },
            {
              data: { url: `${process.env.BASE_PATH}/static/tree.gltf` },
              name: 'hotspot3',
              type: 'image',
              ath: 30,
              atv: 20,
              url: hotspot
            }
          ]
        }
      ])
    }, 200)
  })
}
