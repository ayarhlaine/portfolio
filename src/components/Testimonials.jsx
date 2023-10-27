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
        <div className='mt-10 grid gap-5 grid-cols-1 lg:gap-10 lg:grid-cols-3'>
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
    const extraClassNames = name.length <= 0 ? 'hidden lg:block' : '';
    const htmlContent = {
        __html: recommendation,
      };
  
    return (
        <motion.div 
        initial="offscreen"
        whileInView="onscreen" 
        variants={fadeIn(index * 0.5, 0.75)}
        className={`bg-[#090325] p-5 rounded-xl lg:max-w-md min-w-full md:min-w-0 relative mt-[3rem] ${extraClassNames}`} style={{ minHeight: 250 }}>
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
                    <img src="/assets/quote.png" className="mb-3" alt="Quote" width={24} height={24}/>
                    <div dangerouslySetInnerHTML={htmlContent} className="text-slate-400 text-sm"/>
                    <img src="/assets/quote.png" className="mt-3 quote-right" alt="Quote" width={24} height={24}/>
                </div>
                </>
                :
                <>
                    <div className="flex items-center justify-center h-full watermark"></div>
                </>
            }
        </motion.div>
    )
}

export default Testimonials