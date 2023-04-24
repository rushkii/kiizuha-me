import abyssCardDark from "@/assets/img/abyss-card-front-dark.png";
import abyssCardLight from "@/assets/img/abyss-card-front-light.png";
import kiizuhaMeDark from "@/assets/img/kiizuha-me-front-dark.png";
import kiizuhaMeLight from "@/assets/img/kiizuha-me-front-light.png";
import loreDaemon1 from "@/assets/img/lore-daemon-1.png";
import loreDaemon2 from "@/assets/img/lore-daemon-2.png";
import loreDaemon3 from "@/assets/img/lore-daemon-3.png";


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
    demoLink: "https://kiizuha-me.vercel.app",
    repoLink: "https://github.com/rushkii/kiizuha-me"
  },
  {
    name: "abyss-card",
    description: "A project to fetch Genshin Impact player profile, this project is for my self-learning NextJS, TypeScript, TailwindCSS for 1 month since it was started. This project is still unfinished and abandoned for a while.",
    imageSrc: [abyssCardDark.src, abyssCardLight.src],
    demoLink: "https://abyss-card.vercel.app",
    repoLink: "https://github.com/rushkii/abyss-card"
  },
  {
    name: "lore-daemon",
    description: "A collaboration Telegram & Discord project with Ammar Faizi, this project is to make an email notifier to receive new emails from the https://lore.kernel.org mailing list.",
    imageSrc: [loreDaemon1.src, loreDaemon2.src, loreDaemon3.src],
    demoLink: "https://t.me/s/GNUWeeb/687248",
    repoLink: "https://github.com/ammarfaizi2/lore-daemon"
  },

] as ProjectsType[];
