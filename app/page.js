import Link from 'next/link'

export default function App() {
  return (
    <div class='w-[50%] mx-auto my-[10vh] text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white'>
      <Link class='block w-full p-6  border-b border-gray-200 rounded-t-lg dark:border-gray-600' href='/example'>
        渲染示例
      </Link>
      <Link class='block w-full p-6  border-b border-gray-200 rounded-t-lg dark:border-gray-600' href='/spots'>
        添加热点
      </Link>
    </div>
  )
}
