import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  )
}

const Header = () => {
  return (
    <Head>
      <title>👋🏼 Matthew Gleich</title>

      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <meta
        name="description"
        content="Matthew Gleich is a 16-year-old thats building scalable, multi-platform applications using cutting edge frameworks and technologies. 100% self taught 🚀"
      />
      <meta
        name="keywords"
        content="Matthew Gleich, Gleich, Matthew, photography, goffstown, coding, cycling, hampshire, golang, kubernetes, flutter, dart, github, rpi, ghs, import_sorter"
      />
    </Head>
  )
}

const Main = () => {
  return (
    <main className={styles.body}>
      <h1 className={styles.title}> 👋🏼 Hello!</h1>
      <h2 className={styles.subtitle}>
        🚧 I'm currently{' '}
        <a href="https://github.com/Matt-Gleich/site-v2" target="_blank">
          building
        </a>{' '}
        this site 🚧
      </h2>
      <p className={styles.description}>
        In the mean time you can go checkout my{' '}
        <a href="https://github.mattglei.ch" target="_blank">
          GitHub account
        </a>{' '}
        or my{' '}
        <a href="https://old.mattglei.ch" target="_blank">
          old site built with flutter
        </a>
        .
      </p>
    </main>
  )
}
