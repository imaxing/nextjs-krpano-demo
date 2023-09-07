import cls from 'classnames'

/**
 * 全屏覆盖包裹组件
 * @param {*} param0
 * @returns
 */
export default function FullFixedWrapper({ children, className, style }) {
  return (
    <div style={style} className={cls('fixed w-screen h-screen left-0 top-0 z-[1000000]', className)}>
      {children}
    </div>
  )
}
