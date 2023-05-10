import { motion } from "framer-motion"
import { textVariant } from "../utils/animations"
import { styles } from "../styles"
import PropTypes from 'prop-types';

const AnimatedSectionHeader = ({ heading, subHeading }) => {
  return (
    <motion.div 
    initial="offscreen"
    whileInView="onscreen" 
    variants={textVariant}>
        <h1 className={`${styles.sectionSubHeading}`}>{subHeading}</h1>
        <h1 className={`${styles.sectionHeading}`}>{heading}</h1>
    </motion.div>
  )
}

AnimatedSectionHeader.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
}

export default AnimatedSectionHeader