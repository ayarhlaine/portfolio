import Experiences from './components/experiences';

export default function Home() {
  return (
    <div className="bg-primary text-secondary">
      <nav className="flex w-full py-4 px-10 justify-between bg-black-200" >
        <div className="flex">
          <a href="#" className="text-2xl hover:text-blue-800 uppercase">Ayar Hlaine</a>
         </div>
         <div>
          <a href="#" className="mr-4">Github</a>
          <a href="#" className="mr-4">LinkedIn</a>
         </div>
      </nav>
      {/* Hero Section */}
      <div className="hero-section flex w-full flex-row px-10 py-10 text-secondary">
        <div className="hero-left-section basis-1/2">
          <h1 className="text-7xl mt-5">Hi, I'm Ayar Hlaine</h1>
          <p className='mt-10 text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid dolorum velit minus laborum iusto sequi blanditiis consequatur tempore hic nam totam repellendus sunt quae, unde soluta at, culpa veniam in.</p>
        </div>
        <div className="hero-right-section basis-1/2 flex item-center justify-center">
          <img src='https://scontent.fsin14-2.fna.fbcdn.net/v/t39.30808-6/256344019_4706694179368617_8212797723063968371_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-ezm0c2L9PgAX9tCenz&_nc_ht=scontent.fsin14-2.fna&oh=00_AfDwukGH0Za3jfjS-LWpY38sMHLYHcmRzSmUreZvcBK4yA&oe=645B396A' alt='Ayar Hlaine Photo' width={500} height={500}/>
        </div>
      </div>
      {/* Experiences */}
      <section className="px-10 py-2">
        <h1 className="text-lg uppercase text-secondary">What I have done so far</h1>
        <h1 className="text-7xl text-secondary">Work Experience.</h1>
        <div className='flex flex-col mt-20'>
          <Experiences />
        </div>
      </section>
      {/* Projects */}
      <section className="h-96 px-10 py-2">
        <h1 className="text-lg uppercase text-secondary">My Work</h1>
        <h1 className="text-7xl text-secondary">Projects.</h1>
      </section>
      <footer>
        {/* Contact Form */}
        <div className="h-96 px-10 py-2">
          <h1 className="text-lg uppercase text-secondary">Get In Touch</h1>
          <h1 className="text-7xl text-secondary">Contact.</h1>
        </div>
      </footer>
    </div>
  )
}
