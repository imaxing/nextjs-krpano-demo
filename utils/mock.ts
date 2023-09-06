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
              name: 'hotspot0',
              type: 'image',
              ath: 50,
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
              name: 'hotspot0',
              type: 'image',
              ath: -50,
              atv: 10,
              url: 'https://0xllllh.github.io/krpano-examples/images/hotspot.png'
            }
          ]
        }
      ])
    }, 2000)
  })
}