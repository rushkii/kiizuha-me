import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/styles/Custom.module.css";


const Headers = () => {
  const route = useRouter();
  let currentPath = route.pathname;

  return (
    <nav className="w-full backdrop-blur border-b-[0.1px] relative z-10 border-b-[#cfcfd6] dark:border-[#cbd5e129] supports-backdrop-blur:bg-white/60 font-rubik">
      <div className="px-8 flex sm:justify-center lg:justify-between">
        <Link href="/" title="Abyss" className="h-12 flex items-center sm:text-xl 2lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-500 dark:to-purple-400 from-25% to-75%" style={{backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
          kiizuha.dev
        </Link>

        <ul className="flex border-blue-600">
          <li className="h-auto">
            <Link
              href="/projects"
              title="Projects"
              className={`h-12 flex items-center transition-all duration-200 hover:border-black
                        hover:dark:border-white border-b-2 border-transparent font-bold text-lg
              ${currentPath === "/projects" ? "border-black dark:border-white" : ""}`}
            >
              <div className={currentPath === "/projects" ? styles.textNeon : ""}>Projects</div>
              <div className="absolute w-full h-[1px] border-b-6 bottom-0 border-gray-900"></div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Headers;
