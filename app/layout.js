import 'tailwindcss/tailwind.css'
import { Inter } from 'next/font/google'
import classNames from 'classnames'
const inter = Inter({ subsets: ['latin'] })

export const metadata = { title: 'Pages' }

export default function RootLayout({ children }) {
  return (
    <html lang='zh'>
      <body className={classNames(inter.className, `bg-[#fff] text-[#212121] dark:text-[#fff] dark:bg-[#212121]`)}>
        {children}
      </body>
    </html>
  )
}
