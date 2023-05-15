import Link from "next/link"
import { useRouter } from "next/router";


export default function CustomMobileNavLink ({href, title, toggle, className=`${className}`}) {
  const router = useRouter()

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button onClick={handleClick} href={href} className={`${className} relative group my-2`}>
      {title}
      <span className={`
        h-[1px] inline-block bg-light 
        absolute left-0 -bottom-0.5 group-hover:w-full trasition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"}
      `}>
        &nbsp;
      </span>
    </button>

  )

}