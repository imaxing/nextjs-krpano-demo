export default function Loading({ text, background }) {
  return (
    <div
      style={{ background: background || 'rgba(0, 0, 0, 0.8)' }}
      className='fixed w-screen h-screen left-0 top-0 z-[20] flex items-center justify-center text-[#fff]'
    >
      {text || 'loading...'}
    </div>
  )
}
