import FullFixedWrapper from '@/components/full-fixed-wrapper'
export default function Loading({ text, background }) {
  return (
    <FullFixedWrapper
      style={{ background: background || 'rgba(0, 0, 0, 0.8)' }}
      className='flex items-center justify-center text-[#fff]'
    >
      {text || 'loading...'}
    </FullFixedWrapper>
  )
}
