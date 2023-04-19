import { Rubik } from 'next/font/google'


export const fontRubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--rubik-font",
});
