import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { BiGitRepoForked } from "react-icons/bi";

const NavigationBottom = () => {
  return (
    <div className="sticky lg:hidden bottom-3 w-full flex justify-center items-center mb-3">
      <div className="flex flex-row py-2 px-2 lg:py-3 lg:px-3 sm:py-3 sm:px-2 bg-slate-500 border border-[#ffffff22] backdrop-blur-md rounded-xl space-x-2 sm:space-x-4 lg:space-x-5 bg-opacity-30">
        <Link href="/">
          <BsFillPersonFill
            className="grid place-items-center text-[20px] lg:text-[30px] sm:text-[25px] text-slate-500 dark:text-slate-300"
          />
        </Link>
        <Link href="/projects">
          <BiGitRepoForked
            className="grid place-items-center text-[20px] lg:text-[30px] sm:text-[25px] text-slate-500 dark:text-slate-300"
          />
        </Link >
      </div>
    </div>
  );
}

export default NavigationBottom;
