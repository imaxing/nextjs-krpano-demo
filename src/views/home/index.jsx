import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='w-[50%] mx-auto my-[10vh] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
      <Link to='/example' className='block w-full p-6  border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
        渲染示例
      </Link>
      <Link className='block w-full p-6  border-b border-gray-200 rounded-t-lg dark:border-gray-600' to='/spots'>
        添加热点
      </Link>
    </div>
  )
}
