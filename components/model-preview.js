'use client'

import ModelViewer from '@/components/model-viewer'
import FullFixedWrapper from '@/components/full-fixed-wrapper'

export default function ModelPreview(props) {
  return (
    <FullFixedWrapper className='flex items-center justify-center'>
      <ModelViewer model={props.model} />

      <button
        className='fixed left-[20px] z-[99999999999999] top-[20px] bg-[#0F0F0F] text-[#fff] px-[15px] py-[8px] rounded-md'
        onClick={() => props.onBack && props.onBack()}
      >
        返回
      </button>
    </FullFixedWrapper>
  )
}
