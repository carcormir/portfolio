// import { ReactIcon, JsIcon, TypeScriptIcon, CssIcon, HtmlIcon, 
//           JestIcon, NextJsIcon, GithubIcon, PythonIcon, RobotIcon, TailWindIcon, 
//           ViteIcon   } from "./Icons"

import { CssIcon, HtmlIcon, JsIcon } from "./Icons"

export const skillsData = [
  {
    type: "frontend",
    list: [
      {
        name: "React",
        icon: <div></div>//<ReactIcon />
      },
      {
        name: "JavaScript",
        icon: <JsIcon />
      },
      {
        name: "TypeScript",
        icon: <div></div>//<TypeScriptIcon />
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
        icon: <div></div>//<NextJsIcon />
      },
      {
        name: "Tailwind CSS",
        icon: <div></div>//<TailWindIcon />
      },
      {
        name: "GitHub",
        icon: <div></div>//<GithubIcon />
      },
      {
        name: "Jest",
        icon: <div></div>//<JestIcon />
      },
    ]
  },
  {
    type: "others",
    list: [
      {
        name: "Vite",
        icon: <div></div>//<ViteIcon />
      },
      {
        name: "Python",
        icon: <div></div>//<PythonIcon />
      },
      {
        name: "Robotics",
        icon: <div></div>//<RobotIcon />
      },
    ]
  },
  {
    type: "soft-skills",
    list: [
      {
        name: "soft-1",
        icon: <div>here</div>
      },
      {
        name: "soft-2",
        icon: <div>here</div>
      },
      {
        name: "soft-3",
        icon: <div>here</div>
      },
      {
        name: "soft-4",
        icon: <div>here</div>
      },
      {
        name: "soft-5",
        icon: <div>here</div>
      },
    ]
  }
]

export function SkillCard({ name, icon }) {
  return (
    <div className="w-1/6 h-auto flex flex-col items-center justify-center px-5">
      <div className="w-24 h-24 bg-red-400 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div className="text-lg font-medium mt-4 text-dark/75">
        {name}
      </div>
    </div>
  )
}

export default function Skills() { 
  return (
      <>
        <h2 className="font-bold text-8xl mt-36 w-full text-center">Skills</h2>
        <div className="w-full h-screen flex flex-col items-start justify-start">
          {
            skillsData.map((skill, index) => {
              return (
                <div key={index} className="w-full h-auto flex flex-col items-start justify-start mt-10">
                  <div className="text-3xl font-bold text-dark/75">
                    {skill.type}
                  </div>
                  <div className="w-full h-1/2 flex flex-wrap items-start justify-start gap-10 mt-10">
                    {
                      skill.list.map((item, index) => {
                        return (<SkillCard key={index} name={item.name} icon={item.icon} />)
                      })
                    } 
                  </div>
                </div>
              )
            })
          }
        </div>
      </>
  )}

