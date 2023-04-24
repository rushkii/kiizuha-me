import Link from "next/link";
import { BsFillPersonFill, BsPerson } from "react-icons/bs";
import { AiFillProject, AiOutlineProject } from "react-icons/ai";
import styles from "@/styles/Custom.module.css";
import { useRouter } from "next/router";


const NavigationBottom = () => {
  const router = useRouter();
  let currentPath = router.pathname;

  return (
    <div className="sticky lg:hidden bottom-3 w-full flex justify-center items-center mb-3">
      <div className="flex flex-row py-2 px-2 lg:py-3 lg:px-3 bg-slate-500 border border-[#ffffff22] backdrop-blur-xl rounded-xl space-x-2 lg:space-x-3 bg-opacity-30">
        <Link href="/">
          <div className="flex flex-col px-1 items-center justify-center text-center space-y-2">
            {currentPath === "/" ?
              <BsFillPersonFill
                className="grid place-items-center text-[20px] lg:text-[30px] sm:text-[25px] text-black dark:text-white"
              /> :
              <BsPerson
                className="grid place-items-center text-[20px] lg:text-[30px] sm:text-[25px] text-black dark:text-white"
              />
            }
            <div className={`text-xs line-clamp-1 ${currentPath === "/" ? styles.textNeon + " font-medium" : ""}`}>Profile</div>
          </div>
        </Link>
        <Link href="/projects">
          <div className="flex flex-col px-1 overflow-hidden items-center justify-center text-center space-y-2">
            {currentPath === "/projects" ?
              <AiFillProject
                className="grid place-items-center text-[20px] lg:text-[30px] sm:text-[25px] text-black dark:text-white"
              /> :
              <AiOutlineProject
                className="grid place-items-center text-[20px] lg:text-[30px] sm:text-[25px] text-black dark:text-white"
              />
            }
            <div className={`text-xs line-clamp-1 ${currentPath === "/projects" ? styles.textNeon + " font-medium" : ""}`}>Projects</div>
          </div>
        </Link >
      </div>
    </div>
  );
}

export default NavigationBottom;
