import { styles } from "../styles";
import Experience from "./Experience";

const Experiences = () => {
  return (
    <section className={`${styles.padding} py-2`}>
      <h1 className={`${styles.sectionSubHeading}`}>What I have done so far</h1>
      <h1 className={`${styles.sectionHeading}`}>Work Experience.</h1>
      <div className='flex flex-col mt-20'>
        <Experience />
      </div>
    </section>
  )
}

export default Experiences