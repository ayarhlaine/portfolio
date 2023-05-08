import { styles } from '../styles';

const ContactForm = () => {
  return (
    <section className="bg-black-200">
        <div className={`${styles.padding}`}>
        <h1 className="text-lg uppercase text-white-100">Get In Touch</h1>
        <h1 className="text-5xl text-white">Contact.</h1>
        <div className="flex w-full flex-row mt-5">
            <div className='w-[100%] md:w-[50%] py-5'>
            <div className='mt-5'>
                <p className='text-white-100'>Your Name</p>
                <input type="text" className='mt-5 p-3 w-[100%]' placeholder='What is your name?'/>
            </div>
            <div className='mt-5'>
                <p className='text-white-100'>Your Email</p>
                <input type="text" className='mt-5 p-3 w-[100%]' placeholder='What is your email?'/>
            </div>
            <div className='mt-5'>
                <p className='text-white-100'>Your Message</p>
                <textarea className='mt-5 p-3 w-[100%]' placeholder='What do you want to say?'/>
            </div>
            <div className='mt-5'>
                <button type='submit' className='bg-[#A663CC] text-white py-2 px-5'>Send</button>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default ContactForm