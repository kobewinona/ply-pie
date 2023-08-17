import './globals.css'
import Head from 'next/head';

import montserratAlternates from './utils/fonts/montserratAlternates';
import layoutStyles from './layout.module.css'

export let metadata = {
  title: 'Ply Pie',
  description: 'home page of stuff',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={montserratAlternates.className}>
      <body className={layoutStyles.page}>
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
        {children}
      </body>
    </html>
  )
}
