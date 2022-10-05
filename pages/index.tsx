import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [config, setConfig] = useState()

  useEffect(() => {
    fetch('/api/client-config')
      .then(res => res.json())
      .then(json => setConfig(json))
  }, [setConfig])

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Greg's config PoC!
        </h1>

        {config &&
          <div className={styles.description} style={{ textAlign: 'left' }}>
            Your dynamic config is:
            <pre>{JSON.stringify(config, null, 2)}</pre>
          </div>
        }

      </main>
    </div>
  )
}

export default Home