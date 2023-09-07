import cls from 'classnames'

export default function FullFixedWrapper({ children, className, style = {} }) {
  return (
    <div style={style} className={cls('fixed w-screen h-screen left-0 top-0 z-[1000000] scale-in-center', className)}>
      {children}
    </div>
  )
}
