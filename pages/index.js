import Head from 'next/head'
import Intro from '../components/intro'
import Form from '../components/form'
import Details from '../components/details'
import Quote from '../components/quote'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Auvik ebook</title>
        <meta name="description" content="auvik" />
      </Head>
      <Header />
      <main>
        <Intro />
        <Details />
        <Form />
        <Quote />
      </main>
      <Footer />
    </>
  )
}
