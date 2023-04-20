import Link from "next/link";


const Headers = () => {
  return (
    <nav className="w-full backdrop-blur border-b-[0.1px] relative z-10 border-b-[#cfcfd6] dark:border-[#cbd5e129] supports-backdrop-blur:bg-white/60 font-rubik">
      <div className="px-8 flex sm:justify-center lg:justify-between">
        <Link href="/" title="Abyss" className="h-12 flex items-center sm:text-xl 2lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-500 dark:to-purple-400 from-25% to-75%" style={{backgroundClip: "text", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
          kiizuha.dev
        </Link>
      </div>
    </nav>
  );
}

export default Headers;
