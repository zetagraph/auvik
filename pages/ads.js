import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Ads() {
  const Images = styled.div`
    padding: 8rem 4rem;
    text-align: center;

    @media (min-width: ${(props) => props.theme.screen.lg}) {
      padding: 14rem 4rem;
    }

    img {
      display: inline-block;
      margin-bottom: 2rem;
    }
  `
  return (
    <>
      <Head>
        <title>Auvik ebook</title>
        <meta name="description" content="auvik" />
      </Head>
      <Header />
      <main>
        <Images>
          <img src="/images/ad-600x600.png" alt="ad" />
          <img src="/images/ad-600x600.png" alt="ad" />
          <img src="/images/ad-728x90.png" alt="ad" />
        </Images>
      </main>
      <Footer />
    </>
  )
}
