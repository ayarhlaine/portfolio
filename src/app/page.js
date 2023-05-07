export default function Home() {
  return (
    <main className="">
      <nav className="flex w-full py-4 px-4 justify-between bg-neutral-900" >
        <div className="flex">
          <a href="#" className="text-2xl hover:text-blue-800">Ayar Hlaine</a>
         </div>
         <div>
          <a href="#" className="mr-4">Github</a>
          <a href="#" className="mr-4">LinkedIn</a>
         </div>
      </nav>
      {/* Hero Section */}
      <div className="hero-section flex w-full flex-row px-10 py-2 h-96">
        <div className="hero-left-section basis-1/2">
          <h1 className="text-2xl">Nice to meet you!</h1>
          <h1 className="text-2xl">I am Ayar Hlaine</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorum velit minus laborum iusto sequi blanditiis consequatur tempore hic nam totam repellendus sunt quae, unde soluta at, culpa veniam in.</p>
        </div>
        <div className="hero-right-section basis-1/2">
          Image
        </div>
      </div>
      {/* Experiences */}
      <section className="h-96 px-10 py-2">
        <h1 className="text-2xl">Experiences</h1>
      </section>
      {/* Projects */}
      <section className="h-96 px-10 py-2">
        <h1 className="text-2xl">Projects</h1>
      </section>
      <footer>
        {/* Contact Form */}
        <div className="h-96 px-10 py-2">
          <h1 className="text-2xl">Contact</h1>
        </div>
      </footer>
    </main>
  )
}
