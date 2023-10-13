import PropTypes from 'prop-types';
import { PROJECTS } from "../constants";
import { styles } from "../styles";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

const Projects = () => {
  return (
    <section className={`${styles.padding}`}>
      <AnimatedSectionHeader heading={'Projects.'} subHeading={'My Work'}/>
      <div className='mt-10 grid gap-5 grid-cols-1 md:grid-cols-3 md:gap-10'>
        {
          PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project}/>
          ))
        }
      </div>
    </section>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <div className='p-7 bg-black-200 rounded-lg'>
      <img src={`/assets/${project.image}`} className='w-full object-contain rounded-lg'/>
      <h2 className='text-2xl text-white mt-2' >{project.title}</h2>
      <p className='text-base text-slate-400 mt-2'>{project.description}</p>
      <div className='mt-4'>
        {
          project.tags.map((tag) => (
            <span key={tag.name} className={`mr-2`} style={{ color: tag.color }}>{tag.name}</span>
          ))
        }
      </div>
      <div className='mt-4'>
        {
          project.links.map((link) => (
            <a key={link.text} href={link.link} className="px-3 py-2 bg-teal-500 text-white rounded mr-2" target="_blank" rel="noreferrer">{link.text}</a>
          ))
        }
      </div>
    </div>
  )
}

ProjectCard.propTypes = {
  project: PropTypes.object,
}

export default Projects