import { styles } from "../styles";

const Nav = () => {
  return (
    <nav className={`${styles.paddingX} flex w-full py-3 px-10 justify-between bg-primary fixed top-0 z-20`} >
        <div className="flex">
            <img src="/assets/logo.png" className="w-9 h-9 rounded-full"/>
            <a href="#" className="ml-3 text-2xl text-white uppercase">Ayar Hlaine</a>
        </div>
        <div className='flex'>
            <a href="#" className="mr-4 bg-white-100 rounded-full p-1">
                <img src="/assets/github.png" alt="Github Icon" width={25} height={25}/>
            </a>
            <a href="#" className="mr-4 bg-white-100 rounded-full p-1">
                <img src="/assets/linkedin.png" alt="Linkedin Icon" width={25} height={25}/>
            </a>
        </div>
  </nav>
  )
}

export default Nav