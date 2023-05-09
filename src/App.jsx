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
      <main className='bg-secondary text-white-100'>
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
      </footer>
    </>
  )
}

export default App
