import Experiences from './components/experiences';

export default function Home() {
  return (
    <main className="">
      <nav className="flex w-full py-4 px-10 justify-between bg-neutral-100" >
        <div className="flex">
          <a href="#" className="text-2xl hover:text-blue-800 uppercase">Ayar Hlaine</a>
         </div>
         <div>
          <a href="#" className="mr-4">Github</a>
          <a href="#" className="mr-4">LinkedIn</a>
         </div>
      </nav>
      {/* Hero Section */}
      <div className="hero-section flex w-full flex-row px-10 py-10">
        <div className="hero-left-section basis-1/2">
          <h1 className="text-6xl">Nice to meet you!</h1>
          <h1 className="text-7xl mt-5">I am Ayar Hlaine</h1>
          <p className='mt-10 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorum velit minus laborum iusto sequi blanditiis consequatur tempore hic nam totam repellendus sunt quae, unde soluta at, culpa veniam in.</p>
        </div>
        <div className="hero-right-section basis-1/2">
          Image
        </div>
      </div>
      {/* Experiences */}
      <section className="px-10 py-2">
        <h1 className="text-lg uppercase">What I have done so far</h1>
        <h1 className="text-7xl">Work Experience.</h1>
        <div className='flex flex-col mt-20'>
          <Experiences />
        </div>
      </section>
      {/* Projects */}
      <section className="h-96 px-10 py-2">
        <h1 className="text-lg uppercase">My Work</h1>
        <h1 className="text-7xl">Projects.</h1>
      </section>
      <footer>
        {/* Contact Form */}
        <div className="h-96 px-10 py-2">
          <h1 className="text-lg uppercase">Get In Touch</h1>
          <h1 className="text-7xl">Contact.</h1>
        </div>
      </footer>
    </main>
  )
}
