import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import { GrMail } from "react-icons/gr";


const Footer = () => {

  return (
    <footer className="w-screen py-8 border-t-2 border-b-[#cfcfd6] dark:border-[#cbd5e129]">
      <div className="flex flex-col justify-center items-center space-y-5">
        <div className="flex space-x-10">
          <Link href="https://github.com/rushkii"><BsGithub size={25}/></Link>
          <Link href="https://www.linkedin.com/in/kiizuha"><BsLinkedin size={25}/></Link>
          <Link href="https://twitter.com/kiizuha_"><BsTwitter size={25}/></Link>
          <Link href="https://www.instagram.com/rushkii_"><BsInstagram size={25}/></Link>
          <Link href="mailto:kiizuha@gnuweeb.org"><GrMail size={25}/></Link>
        </div>
        <div className="text-slate-700 dark:text-slate-300 flex">
          Source code is available on
          <Link href="https://github.com/rushkii/kiizuha-me" className="flex justify-center items-center ml-1 underline">
            <BsGithub size={15}/>
            <div className="ml-1 font-semibold text-black dark:text-white">GitHub</div>
          </Link>
        </div>
        <div className="text-slate-700 dark:text-slate-300">
          Copyright &copy; {new Date().getFullYear()} - <span className="font-semibold text-black dark:text-white">Kiizuha Kanazawa</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
