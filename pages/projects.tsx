import { BsEyeFill, BsGithub } from "react-icons/bs"
import styles from "@/styles/Custom.module.css";
import CardImage from "@/components/CardImage";
import projects from "@/data/projects";


const Projects = () => {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen py-14 font-rubik">
      <div className="uppercase relative leading-relaxed sm:before:w-[5.1rem] xl:before:w-[6.4rem] inline-block sm:text-xl xl:text-2xl font-semibold mb-8 before:content-[''] before:absolute before:-bottom-2 before:h-1 before:left-3 before:rounded-md before:bg-blue-500 dark:before:bg-blue-600">
        Projects
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-start">
        {projects.map((key, _) => {
          return (
            <div key={key.name} className={`mx-auto flex max-w-screen-sm justify-center ${styles.card}`}>
              <div className="h-full w-full p-[3px] rounded-2xl bg-gradient-to-r from-blue-600 to-purple-400 dark:from-blue-700 dark:to-purple-700 from-25% to-75% shadow-md shadow-gray-400 hover:shadow-gray-400 dark:shadow-black dark:hover:shadow-black hover:scale-105 transition">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#f1f1f1] dark:bg-[#131517]">
                  <div>
                    <a href={key.demoLink}>
                      <div className="relative">
                        <div><CardImage images={key.imageSrc}/></div>
                        <div className={`absolute rounded-t-md top-0 bg-[#0000005f] dark:bg-[#00000080] w-full h-full flex flex-col justify-center items-center text-white ${styles.seeProject}`}>
                          <BsEyeFill size={30}/>
                          <div className="font-semibold leading-none">See demo</div>
                        </div>
                      </div>
                    </a>
                    <div className="flex flex-col p-3 space-y-2">
                      <div className="font-medium text-xl uppercase overflow-hidden truncate">{key.name}</div>
                      <div className="line-clamp-3 text-slate-700 dark:text-slate-300 h-[4.5rem]">{key.description}</div>
                      <a href={key.repoLink} className="flex justify-center items-center p-2 bg-blue-500 hover:bg-blue-400 rounded-lg text-white">
                        <BsGithub size={15}/>
                        <div className="ml-2">View source code</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </main>
  );
}

export default Projects;
