import Experiences from "./components/Experiences";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className='bg-secondary text-white-100'>
        <Hero />
        <hr className='background-[#A663CC] border-[#A663CC]'/>
        <Experiences />
        <Projects />
        <ContactForm />
      </main>
      <footer>
      </footer>
    </>
  )
}

export default App
