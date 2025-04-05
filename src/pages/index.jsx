import LogIn from './LogIn'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Next_Bulletin-Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LogIn />
    </>
  )
}

export default Home
