import '@/styles/globals.css'
import { fontRubik } from '@/data/fonts'
import type { AppProps } from 'next/app'
import Headers from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kiizuha Kanazawa</title>
        <meta name="description" content="Kiizuha Kanazawa's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx global>{`
        :root {
          --rubik-font: ${fontRubik.style.fontFamily};
        }
      `}</style>
      <Headers/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
