import { CssIcon, HtmlIcon, JsIcon, TypeScriptIcon, JestIcon, 
  NextJsIcon, PythonIcon, ReactIcon, TailWindIcon, GithubIcon, 
  ViteIcon, RobotIcon } from "../components/Icons"
  
export const SkillsData = [
  {
    type: "frontend",
    list: [
      {
        name: "React",
        icon: <ReactIcon />
      },
      {
        name: "JavaScript",
        icon: <JsIcon />
      },
      {
        name: "TypeScript",
        icon: <TypeScriptIcon />
      },
      {
        name: "CSS",
        icon: <CssIcon />
      },
      {
        name: "HTML",
        icon: <HtmlIcon />
      },
      {
        name: "Next.js",
        icon: <NextJsIcon />
      },
      {
        name: "Tailwind CSS",
        icon: <TailWindIcon />
      },
      {
        name: "Jest",
        icon: <JestIcon />
      },
    ]
  },
  {
    type: "others",
    list: [
      {
        name: "Vite",
        icon: <ViteIcon />
      },
      {
        name: "GitHub",
        icon: <GithubIcon />
      },
      {
        name: "Python",
        icon: <PythonIcon />
      },
      {
        name: "Robotics",
        icon: <RobotIcon />
      },
    ]
  },
]