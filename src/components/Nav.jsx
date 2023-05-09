import { styles } from "../styles";

const Nav = () => {
  return (
    <nav className={`${styles.paddingX} flex w-full py-3 px-10 justify-between bg-primary fixed top-0 z-20`} >
        <div className="flex">
            <img src="/assets/logo.png" className="w-9 h-9 rounded-full"/>
            <a href="#" className="ml-3 text-lg text-white font-bold md:text-2xl">Ayar Hlaine</a>
        </div>
        <div className='flex'>
            
        </div>
  </nav>
  )
}

export default Nav