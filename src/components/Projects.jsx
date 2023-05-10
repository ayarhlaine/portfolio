import { styles } from "../styles";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

const Projects = () => {
  return (
    <section className={`${styles.padding} h-96`}>
      <AnimatedSectionHeader heading={'Projects.'} subHeading={'My Work'}/>
    </section>
  )
}

export default Projects