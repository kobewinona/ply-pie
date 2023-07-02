import './globals.css'
import daysOneLocalFont from 'next/font/local';
import montserratAlternates from './utils/fonts/montserratAlternates';
import layoutStyles from './layout.module.css'

const daysOneFont = daysOneLocalFont({
  src: '../vendor/fonts/Days_One/DaysOne-Regular.ttf',
})

export let metadata = {
  title: 'home page',
  description: 'home page of stuff',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={montserratAlternates.className}>
      <body className={layoutStyles.page}>
        {children}
      </body>
    </html>
  )
}
