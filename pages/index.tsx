import Image from 'next/image'
import { Inter } from 'next/font/google'
import profileImage from "@/assets/img/catboy.png";


const inter = Inter({ subsets: ['latin'] })

export default function Home(): JSX.Element {
  return (
    <main className="flex flex-col items-center min-h-screen py-14 font-rubik">
      <div className="w-[70%] flex flex-col justify-center">
        <div className="flex items-center justify-center">
          <div>
            <Image src={profileImage} alt="Profile Image" className="2xl:w-[13rem] 2xl:h-[13rem] rounded-full border-4 bg-sky-200 border-sky-600"/>
          </div>
          <div className="flex flex-col ml-14">
            <div className="font-semibold text-xl">Hello</div>
            <div className="font-extrabold text-6xl">I'm Kiizuha</div>
            <div className="font-extrabold text-xl">A Junior Developer</div>
            <div className="mt-4 flex-wrap w-[28rem] text-slate-300">
              I am a full-stack developer, and I enjoy creating self-projects when I have the inspiration and motivation to do so.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-14">
          <div className="uppercase relative leading-relaxed before:w-24 inline-block text-2xl font-semibold mb-8 before:content-[''] before:absolute before:-bottom-1 before:h-1 before:left-4 before:right-5 before:rounded-md before:bg-sky-600">
            About Me
          </div>
          <div className="text-lg text-slate-300">
            Hi, I'm Muhammad Rizki, and my alias name is Kiizuha Kanazawa. I'm a junior developer with 5 years of experience in the Python programming language and am currently self-learning TypeScript.
            <br/><br/>
            I have developed many bots for Telegram and Discord, REST APIs using FastAPI, scraped websites, developed front-ends using NextJS, ReactJS, React Native, Flutter/Dart, Kotlin, and built back-ends, especially REST APIs, using Python's FastAPI and Flask.
            <br/><br/>
            I have used MongoDB and MySQL for databases, and I often use MongoDB for my own Telegram and Discord bots because it requires fast response times. MongoDB is a NoSQL database, so it is lightweight and faster.
          </div>
        </div>
      </div>
    </main>
  )
}
