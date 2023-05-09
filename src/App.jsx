import Experiences from "./components/Experiences";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Testimonials from "./components/Testimonials";
import { styles } from "./styles";

const App = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className='bg-secondary text-white-100 bg-gradient-to-l from-secondary to-sky-900'>
        <Hero />
        <div className={`${styles.paddingX}`}>
          <hr className="bg-teal-400 border-teal-400"/>
        </div>
        <Experiences />
        <Projects />
        <Testimonials />
        <ContactForm />
      </main>
      <footer>
        <div className="bg-black-200 py-5">
          <p className="text-white text-center">
            Build with <a href="https://vitejs.dev/" className="text-teal-400">Vite + React</a>, hosted on &nbsp;
            <a href="https://vercel.com" className="text-teal-400">vercel.com</a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default App
