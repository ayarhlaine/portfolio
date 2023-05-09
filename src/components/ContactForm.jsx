import { styles } from '../styles';

const ContactForm = () => {
  return (
    <section className={`${styles.padding}`}>
        <div className={`bg-black-200 ${styles.padding} md:w-[50%]`}>
            <h1 className={`${styles.sectionSubHeading}`}>Get In Touch</h1>
            <h1 className={`${styles.sectionHeading}`}>Contact.</h1>
            <div className="flex w-full mt-5 flex-col">
                <div className='w-full md:w-[80%]'>
                    <div className='mt-5'>
                        <p className='text-white-100'>Your Name</p>
                        <input type="text" className='mt-5 p-3 w-[100%] outline-0' placeholder='What is your name?'/>
                    </div>
                    <div className='mt-5'>
                        <p className='text-white-100'>Your Email</p>
                        <input type="text" className='mt-5 p-3 w-[100%] outline-0' placeholder='What is your email?'/>
                    </div>
                    <div className='mt-5'>
                        <p className='text-white-100'>Your Message</p>
                        <textarea className='mt-5 p-3 w-[100%] outline-0' placeholder='What do you want to say?'/>
                    </div>
                    <div className='mt-5'>
                        <button type='submit' className='bg-teal-400 text-white py-2 px-5'>Send</button>
                    </div>
                </div>
        </div>
        </div>
    </section>
  )
}

export default ContactForm