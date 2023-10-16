/* eslint-disable react/prop-types */

import { TESTIMONIALS } from "../constants";
import { motion } from 'framer-motion';
import AnimatedSectionHeader from "./AnimatedSectionHeader";
import { styles } from "../styles";
import { fadeIn } from "../utils/animations";
import './Testimonials.css';

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
    const { name, position, company, image, recommendation } = testimonial;
    const htmlContent = {
        __html: recommendation,
      };
  
    return (
        <motion.div 
        initial="offscreen"
        whileInView="onscreen" 
        variants={fadeIn(index * 0.5, 0.75)}
        className="bg-[#090325] p-5 rounded-xl md:flex-1 md:max-w-md min-w-full md:min-w-0 relative mt-[3rem]">
            {
                name.length > 0 ?
                <>
                <div className="testimonial__image__container">
                    <img src={image} className="testimonial__image" alt="User Image" width={'100%'} height={'100%'}/>
                </div>
                <div className="text-center mt-[3rem]">
                    <p className="text-xl text-white mt-4 md:text-1xl">{name}</p>
                    <p className="text-xs text-slate-300">{position}</p>
                    <p className="text-xs uppercase text-slate-500">{company}</p>
                </div>
                <div className="text-center mt-3">
                    <img src="/assets/quote.png" className="mb-3" alt="Qoute" width={24} height={24}/>
                    <div dangerouslySetInnerHTML={htmlContent} className="text-slate-400 text-sm"/>
                </div>
                </>
                :
                <>
                    <div className="flex items-center justify-center h-full"><p className="text-2xl">TBA</p></div>
                </>
            }
        </motion.div>
    )
}

export default Testimonials