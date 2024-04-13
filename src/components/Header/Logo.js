import Image from "next/image"
import Link from "next/link"
import profileImg from "@/public/profile-img.png"
import styles from "./header.module.css"
const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className=" sm:w-20 w-14  rounded-full overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4">
            <Image src={"/website_logo.webp"} width={200} height={100} alt="the logo for 'Game Name Generator' with the main title 'GNG' prominently displayed at the top, and the full text 'GAME NAME GENERATOR' beneath " className="w-full h-auto rounded-full" sizes="20vw" priority />
        </div>
        <div className="md:flex font-bold dark:font-semibold lg:flex hidden text-lg md:text-xl">
        <span className={`${styles.animatedWord} ${styles.gradientGame}`}>
          Game
        </span>
        <span className={`${styles.animatedWord} ${styles.gradientName}`}>
          Name
        </span>
        <span className={`${styles.animatedWord} ${styles.gradientGenerator}`}>
          Generator
        </span>
      </div>
    </Link>
  )
}

export default Logo