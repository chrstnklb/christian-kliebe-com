import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Christian Kliebe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Christian Kliebe" />
        <p className="description">
          <a href="mailto:christian.kliebe@outlook.com">E-Mail senden</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
