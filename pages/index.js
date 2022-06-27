import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import Footer from '../components/Footer';
// import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(event) {
      event.preventDefault();
      const term = searchInputRef.current.value;
      if(!term.trim()) return
      router.push(`/search?term=${term.trim()}&searchType=`)
  }

  async function randomSearch(event) {
    event.preventDefault();
    const randomTerm = await fetch("https://random-word-api.herokuapp.com/word?number=1").then((response)=> response.json());
    if(!randomTerm) return
    router.push(`/search?term=${randomTerm}&searchType=`)
}

  return (
    <div>
      <Head>
        <title>Google</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Body */}
      <form className='flex flex-col items-center mt-40'>
        
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          objectFit='cover'
          width="300"
          height="100"
        />

        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className='h-5 text-gray-500 mr-3'/>
          <input ref={searchInputRef} type="text" className='flex-grow focus:outline-none'/>
          <MicrophoneIcon className='h-5' />
        </div>
        
        <div className='flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center'>
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={randomSearch} className='btn'>I&apos;m Feeling Lucky</button>
        </div>
      
      </form>

      {/* Footer */}

      <Footer />

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}

      
    </div>
  )
}