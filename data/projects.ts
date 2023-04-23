import abyssCardDark from "@/assets/img/abyss-card-front-dark.png";
import abyssCardLight from "@/assets/img/abyss-card-front-light.png";
import kiizuhaMeDark from "@/assets/img/kiizuha-me-front-dark.png";
import kiizuhaMeLight from "@/assets/img/kiizuha-me-front-light.png";


type ProjectsType = {
  name: string
  description: string
  imageSrc: string[]
  demoLink: string
  repoLink: string
}


export default [
  {
    name: "kiizuha.dev",
    description: "My personal website",
    imageSrc: [kiizuhaMeDark.src, kiizuhaMeLight.src],
    demoLink: "https://kiizuha-dev.vercel.app",
    repoLink: "https://github.com/rushkii/kiizuha-me"
  },
  {
    name: "abyss-card",
    description: "A project to fetch Genshin Impact player profile, this project is for my self-learning NextJS, TypeScript, TailwindCSS for 1 month since it was started. This project is still unfinished and abandoned for a while.",
    imageSrc: [abyssCardDark.src, abyssCardLight.src],
    demoLink: "https://abyss-card.vercel.app",
    repoLink: "https://github.com/rushkii/abyss-card"
  }
] as ProjectsType[];
