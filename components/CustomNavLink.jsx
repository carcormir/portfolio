import Link from "next/link"
import { useRouter } from "next/router";


export default function CustomLink ({href, title, className=`${className}`}) {
  const router = useRouter()
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`
        w-[1px] inline-block bg-dark h-full
        absolute -left-2 bottom-0 group-hover:h-full trasition-[height] ease duration-300
        ${router.asPath === href ? 'h-full' : 'h-0'}
        `}>
          &nbsp;
      </span>
      <span className={`
        h-[1px] inline-block bg-dark 
        absolute left-0 -bottom-0.5 group-hover:w-full trasition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
      `}>
        &nbsp;
      </span>
    </Link>

  )

}