import { styles } from '../styles';

const Hero = () => {
  return (
    <div className={`${styles.padding} hero-section mt-10 flex w-full flex-col md:flex-row text-secondary`}>
        <div className="hero-left-section basis-1/2 order-2 text-center md:text-left md:order-1">
          <h1 className="text-4xl mt-5 text-white-100 md:text-5xl font-light">Hi, I&apos;m <span className='text-teal-400 font-bold'>Ayar Hlaine</span></h1>
          <p className='mt-10 text-lg text-white-100'>I develop high quality web applications.</p>
          <div className='w-full py-3'>
            <div className='flex flex-wrap gap-1 mt-10 item-center justify-center md:item-start md:justify-start'>
                <a href="https://github.com/ayarhlaine" className="px-3 py-2 bg-teal-500 text-white flex" target="_blank" rel="noreferrer">
                  <img src="/assets/github.png" alt="Github Icon" className='bg-white rounded-full p-1 object-contain' width={30} height={30}/>&nbsp;
                  Github
                </a>
                <a href="https://www.linkedin.com/in/ayarhlaine" className="px-3 py-2 bg-teal-500 text-white flex" target="_blank" rel="noreferrer">
                  <img src="/assets/linkedin.png" alt="Linkedin Icon" className='bg-white rounded-full p-1 object-contain' width={30} height={30}/>&nbsp;
                  Linkedin
                </a>
                <a href="https://leetcode.com/ayarhlaine" className="px-3 py-2 bg-teal-500 text-white flex" target="_blank" rel="noreferrer">
                  <img src="/assets/leetcode.png" alt="LeetCode Icon" className='rounded-full p-1 object-contain' width={30} height={30}/>&nbsp;
                  LeetCode
                </a>
                <a href="https://www.frontendmentor.io/profile/ayarhlaine" className="px-3 py-2 bg-teal-500 text-white flex" target="_blank" rel="noreferrer">
                  <img src="/assets/frontend-mentor.png" alt="Frontend Mentor Icon" className='bg-white rounded-full p-1 object-contain' width={30} height={30}/>&nbsp;
                  Frontend Mentor
                </a>
            </div>
          </div>
        </div>
        <div className="hero-right-section basis-1/2 flex item-center justify-center order-1 md:order-2">
          <img className='rounded-full bg-teal-500' src='/assets/me-withoutbg.png' alt='Ayar Hlaine Photo' width={350} height={350}/>
        </div>
    </div>
  )
}

export default Hero