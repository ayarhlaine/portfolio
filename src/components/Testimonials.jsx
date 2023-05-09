/* eslint-disable react/prop-types */

import { TESTIMONIALS } from "../constants";
import { styles } from "../styles";

const Testimonials = () => {
  return (
    <section className={`${styles.padding}`}>
        <h1 className={`${styles.sectionSubHeading}`}>What they say</h1>
        <h1 className={`${styles.sectionHeading}`}>Testimonials.</h1>
        <div className='flex flex-row mt-5 gap-6 flex-wrap md:flex-nowrap'>
            {
                TESTIMONIALS.map((testimonial) => (
                    <Testimonial key={testimonial.name} testimonial={testimonial}/>
                ))
            }
        </div>
    </section>
  )
}

const Testimonial = ({
    testimonial,
}) => {
    const { name, position, company, recommendation } = testimonial;
    return (
        <div className="bg-[#090325] p-5 rounded-xl md:flex-1">
            <p className="text-white text-[46px]">&quot;</p>
            <div>
                <p className="text-white text-base tracking-wider py-1 md:text-[18px]">{recommendation}</p>
                <div>
                    <p className="text-xl text-white mt-4 md:text-2xl"><span className="text-teal-400">~</span>&nbsp;{name}</p>
                    <p className="text-xs text-slate-400">{position} of {company}</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials