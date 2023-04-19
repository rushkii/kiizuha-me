import '@/styles/globals.css'
import { fontRubik } from '@/data/fonts'
import type { AppProps } from 'next/app'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <style jsx global>{`
        :root {
          --rubik-font: ${fontRubik.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  );
}
