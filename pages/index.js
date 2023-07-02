
import Head from 'next/head'
import Main from '../Components/Main'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Weatherly</title>
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
        <meta name="description" content="A weather app " />
        <link rel="icon" href="src/weather.png" />
      </Head>
      <div className="flex">
        <Main />

      </div>
    </div>
  )
}
