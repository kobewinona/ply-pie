import './globals.css'
import Head from 'next/head';

import montserratAlternates from './utils/fonts/montserratAlternates';
import styles from './layout.module.css'

export let metadata = {
  title: 'Ply Pie',
  description: 'home page of stuff',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className={`${styles['root']} ${montserratAlternates.className}`}>
      <body className={styles['page']}>
        <Head>
          <link rel="icon" href="/favicon.ico" sizes="any" />
        </Head>
        {children}
      </body>
    </html>
  )
}
