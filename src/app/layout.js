import './globals.css'
import Head from 'next/head';

import montserratAlternates from './utils/fonts/montserratAlternates';
import styles from './layout.module.css'

export let metadata = {
  title: 'Ply Pie',
  description: 'home page of stuff',
}

export default function RootLayout ({ children }) {
  return (
    <html lang="ru" className={`${styles['root']} ${montserratAlternates.className}`}>
      <Head>
        <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
      </Head>
      <body className={styles['page']}>
        {children}
      </body>
    </html>
  )
}