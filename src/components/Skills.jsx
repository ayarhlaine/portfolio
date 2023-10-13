/* eslint-disable react/prop-types */

import AnimatedSectionHeader from "./AnimatedSectionHeader";
import { styles } from "../styles";

const Skills = () => {
  return (
    <section className={`${styles.padding}`}>
        <AnimatedSectionHeader heading={'Skills.'} subHeading={'What I have'}/>
        <div className='flex flex-row mt-5 gap-6 flex-wrap md:flex-nowrap'>
          
        </div>
    </section>
  )
}

export default Skills