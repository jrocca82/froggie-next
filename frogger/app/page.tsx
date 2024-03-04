import { getFrameMetadata } from 'frog/next'
import type { Metadata } from 'next'
import Image from 'next/image'

import styles from './page.module.css'

export async function generateMetadata(): Promise<Metadata> {
  const frameTags = await getFrameMetadata(
    `${process.env.VERCEL_URL || 'http://localhost:3000'}/api`,
  )
  return {
    other: frameTags,
  }
}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>This is not the page you're looking for 👀</h1>
      <h4>This app is not front end. It is for making frames on warpcast via server. Follow <a href="https://warpcast.com/loluvulol" target="_blank">loluvulol</a> on warpcast to see results.</h4>
    </main>
  )
}
