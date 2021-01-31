import Head from 'next/head'

export default function Ads() {
  return (
    <>
      <Head>
        <title>Auvik ebook</title>
        <meta name="description" content="auvik" />
      </Head>

      <main>
        <div>
          <img src="/images/ad-600x600.png" alt="ad" />
        </div>
        <div>
          <img src="/images/ad-600x600.png" alt="ad" />
        </div>
        <div>
          <img src="/images/ad-728x90.png" alt="ad" />
        </div>
      </main>
    </>
  )
}
