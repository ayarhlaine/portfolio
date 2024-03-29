import { EXPERIENCES } from '../constants';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <VerticalTimeline>
        {
          EXPERIENCES.map((experience) => {
            return <ExperienceCard experience={experience} key={experience.date}/>
          })
        }
     </VerticalTimeline>
  )
}
const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date={<div>
          <div>{experience.date}</div>
          <div className='text-slate-300 text-sm'>{experience.duration}</div>
        </div>}
        // iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        contentStyle={{ backgroundColor: '#090325' }}
        icon={<CompanyIcon icon={experience.icon}/>}
      >
        <h3 className="vertical-timeline-element-title text-xl text-white">{experience.title}</h3>
        <h4 className="vertical-timeline-element-subtitle text-base">{experience.company_name}</h4>
        <h4 className="vertical-timeline-element-subtitle text-xs">{experience.location} . {experience.job_type}</h4>
        <div className="ml-5 mt-5">
          <ul className="list-disc">
            {experience.responsibilities.map((responsibility) => {
              return (
                <li key={responsibility} className="text-sm font-light">{responsibility}</li>
              )
            })}
          </ul>
        </div>
      </VerticalTimelineElement>
    )
  }
  
  const CompanyIcon = ({ icon }) => {
    if(icon === null) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
        </svg>
      )
    }
    return (
     <div className="flex items-center justify-center w-full h-full bg-red">
       <img src={`/assets/${icon}`} alt='Company Icon' className="w-[60%] h-[60%] object-contain rounded-full"/>
     </div>
    )
  }

export default Experience