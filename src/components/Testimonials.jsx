/* eslint-disable react/prop-types */

import { TESTIMONIALS } from "../constants";
import { motion } from 'framer-motion';
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import { styles } from "../styles";
import { fadeIn } from "../utils/animations";

const Testimonials = () => {
  return (
    <section className={`${styles.padding}`}>
        <AnimatedSectionHeader heading={'Testimonials.'} subHeading={'What they say'}/>
        <div className='flex flex-row mt-5 gap-6 flex-wrap md:flex-nowrap'>
            {
                TESTIMONIALS.map((testimonial, index) => (
                    <Testimonial key={testimonial.name} testimonial={testimonial} index={index}/>
                ))
            }
        </div>
    </section>
  )
}

const Testimonial = ({
    testimonial, index
}) => {
    const { name, position, company, recommendation } = testimonial;
    const htmlContent = {
        __html: recommendation,
      };
  
    return (
        <motion.div 
        initial="offscreen"
        whileInView="onscreen" 
        variants={fadeIn(index * 0.5, 0.75)}
        className="bg-[#090325] p-5 rounded-xl md:flex-1">
            <img src="/assets/quote.png" className="mb-3" alt="Qoute" width={24} height={24}/>
            <div>
                <div dangerouslySetInnerHTML={htmlContent} />
                <div>
                    {name.length > 0 && 
                    <p className="text-xl text-white mt-4 md:text-2xl"><span className="text-teal-400">~</span>&nbsp;{name}&nbsp;<span className="text-teal-400">~</span></p>}
                    <p className="text-xs text-white">{position}</p>
                    <p className="text-xs text-slate-400 mt-4">{company}</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Testimonials