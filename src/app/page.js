import Experiences from './components/experiences';

export default function Home() {
  return (
    <div className="text-secondary bg-black-100">
      <nav className="flex w-full py-4 px-10 justify-between bg-primary fixed top-0 z-20" >
        <div className="flex">
          <a href="#" className="text-2xl text-white uppercase">Ayar Hlaine</a>
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
      {/* Hero Section */}
      <div className="hero-section mt-10 flex w-full flex-row px-10 py-10 text-secondary">
        <div className="hero-left-section basis-1/2">
          <h1 className="text-5xl mt-5">Hi, I'm <span className='text-white-100 underline underline-offset-9'>Ayar Hlaine</span></h1>
          <p className='mt-10 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorum velit minus laborum iusto sequi blanditiis consequatur tempore hic nam totam repellendus sunt quae, unde soluta at, culpa veniam in.</p>
        </div>
        <div className="hero-right-section basis-1/2 flex item-center justify-center">
          <img className='rounded-full' src='/assets/me.jpg' alt='Ayar Hlaine Photo' width={400} height={400}/>
        </div>
      </div>
      {/* Experiences */}
      <section className="px-10 py-2">
        <h1 className="text-lg uppercase text-secondary">What I have done so far</h1>
        <h1 className="text-5xl text-white">Work Experience.</h1>
        <div className='flex flex-col mt-20'>
          <Experiences />
        </div>
      </section>
      {/* Projects */}
      <section className="h-96 px-10 py-2">
        <h1 className="text-lg uppercase text-secondary">My Work</h1>
        <h1 className="text-5xl text-white">Projects.</h1>
      </section>
        {/* Contact Form */}
        <div className="h-96 px-10 py-2">
          <h1 className="text-lg uppercase text-secondary">Get In Touch</h1>
          <h1 className="text-5xl text-white">Contact.</h1>
        </div>
        <footer>
        </footer>
    </div>
  )
}
