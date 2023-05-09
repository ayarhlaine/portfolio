import { styles } from '../styles';

const Hero = () => {
  return (
    <div className={`${styles.padding} "hero-section mt-10 flex w-full flex-col md:flex-row text-secondary"`}>
        <div className="hero-left-section basis-1/2 order-2 text-center md:text-left md:order-1">
          <h1 className="text-5xl mt-5 text-white-100">Hi, I&apos;m <span className='text-5xl text-[#A663CC]'>Ayar Hlaine</span></h1>
          <p className='mt-10 text-lg text-white-100'>I develop high quality web applications.</p>
          <div className='w-full py-3'>
            <div className='flex flex-wrap gap-1 mt-2 item-center justify-center md:item-start md:justify-start'>
                <a href="#" className="px-3 py-2 bg-teal-700 flex">
                  <img src="/assets/github.png" alt="Github Icon" width={25} height={25}/>&nbsp;
                  Github
                </a>
                <a href="#" className="px-3 py-2 bg-teal-700 flex">
                  <img src="/assets/linkedin.png" alt="Github Icon" width={25} height={25}/>&nbsp;
                  Linkedin
                </a>
                <a href="#" className="px-3 py-2 bg-teal-700">LeetCode</a>
                <a href="#" className="px-3 py-2 bg-teal-700">FrontendMentor</a>
            </div>
          </div>
        </div>
        <div className="hero-right-section basis-1/2 flex item-center justify-center order-1 md:order-2">
          <img className='rounded-full' src='/assets/me.jpg' alt='Ayar Hlaine Photo' width={350} height={350}/>
        </div>
    </div>
  )
}

export default Hero