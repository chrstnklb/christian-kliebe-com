import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Mail from "@components/Mail";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Christian Kliebe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Christian Kliebe" />
        <Mail mailLink={"mailto:christian.kliebe@outlook.com"}></Mail>
      </main>

      <Footer />
    </div>
  );
}
