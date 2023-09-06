// @ts-nocheck
'use client'
import cls from 'classnames'
export default function ScenesSwitch({ scenes, value, onChange, className }) {
  return (
    <div className={cls('w-full h-full flex items-center justify-center', className)}>
      {scenes.map(scene => {
        return (
          <button
            className={cls(
              ' text-[#fff] px-[15px] py-[8px] mx-[10px] rounded-md transition-all',
              scene.name === value ? 'bg-[#91701D]' : 'bg-[#0F0F0F]'
            )}
            key={scene.name}
            onClick={() => onChange(scene)}
          >
            {scene.name}
          </button>
        )
      })}
    </div>
  )
}
