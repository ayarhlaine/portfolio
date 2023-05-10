import { styles } from "../styles";
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import Experience from "./Experience";

const Experiences = () => {
  return (
    <section className={`${styles.padding} py-2`}>
      <AnimatedSectionHeader heading={'Work Experience.'} subHeading={'What I have done so far'}/>
      <div className='flex flex-col mt-20'>
        <Experience />
      </div>
    </section>
  )
}

export default Experiences