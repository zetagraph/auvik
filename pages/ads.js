import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Ads() {
  return (
    <>
      <Head>
        <title>Auvik ebook</title>
        <meta name="description" content="auvik" />
      </Head>
      <Header />
      <main>
        Ads
      </main>
      <Footer />
    </>
  )
}
