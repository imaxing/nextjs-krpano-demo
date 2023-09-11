import 'tailwindcss/tailwind.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import classNames from 'classnames'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
const inter = Inter({ subsets: ['latin'] })

export const metadata = { title: 'Pages' }

export default function RootLayout({ children }) {
  return (
    <html lang='zh'>
      <Script src='https://www.yeecai.com/cheshi/3dfly/dist/krpano/krpano.js' />
      <body className={classNames(inter.className, `bg-[#fff] text-[#212121] dark:text-[#fff] dark:bg-[#212121]`)}>
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
