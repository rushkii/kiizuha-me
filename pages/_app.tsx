import '@/styles/globals.css'
import { fontRubik } from '@/data/fonts'
import type { AppProps } from 'next/app'
import Headers from '@/components/Header';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --rubik-font: ${fontRubik.style.fontFamily};
        }
      `}</style>
      <Headers/>
      <Component {...pageProps} />
    </>
  );
}
