import Link from "next/link";
import { BsFillPersonFill } from "react-icons/bs";
import { BiGitRepoForked } from "react-icons/bi";

const NavigationBottom = () => {
  return (
    <div className="sticky lg:hidden bottom-3 w-full flex justify-center items-center mb-3">
      <div className="flex flex-row py-2 px-2 lg:py-3 lg:px-3 bg-slate-500 border border-[#ffffff22] backdrop-blur-xl rounded-xl space-x-2 lg:space-x-3 bg-opacity-30">
        <Link href="/">
          <div className="flex flex-col w-[3rem] bg-gren-300 items-center justify-center text-center space-y-2">
            <BsFillPersonFill
              className="grid place-items-center text-[20px] lg:text-[30px] sm:text-[25px] text-black dark:text-white"
            />
            <div className="text-xs line-clamp-1">Profile</div>
          </div>
        </Link>
        <Link href="/projects">
          <div className="flex flex-col w-[3rem] overflow-hidden bg-gren-300 items-center justify-center text-center space-y-2">
            <BiGitRepoForked
              className="grid place-items-center text-[20px] lg:text-[30px] sm:text-[25px] text-black dark:text-white"
            />
            <div className="text-xs line-clamp-1">Projects</div>
          </div>
        </Link >
      </div>
    </div>
  );
}

export default NavigationBottom;
