import { useRef } from 'react';
import { styles } from '../styles';
import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

const ContactForm = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, form.current, EMAIL_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
    <section className={`${styles.padding}`}>
        <div className={`bg-black-200 ${styles.padding} md:w-[50%]`}>
            <h1 className={`${styles.sectionSubHeading}`}>Get In Touch</h1>
            <h1 className={`${styles.sectionHeading}`}>Contact.</h1>
            <div className="flex w-full mt-5 flex-col">
                <div className='w-full md:w-[80%]'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='mt-5'>
                            <label className='text-white-100'>Your Name</label>
                            <input name='from_name' type="text" className='mt-5 p-3 w-[100%] outline-0 text-black' placeholder='What is your name?'/>
                        </div>
                        <div className='mt-5'>
                            <label className='text-white-100'>Your Email</label>
                            <input name='from_email' type="text" className='mt-5 p-3 w-[100%] outline-0 text-black' placeholder='What is your email?'/>
                        </div>
                        <div className='mt-5'>
                            <label className='text-white-100'>Your Message</label>
                            <textarea name='message' className='mt-5 p-3 w-[100%] outline-0 text-black' placeholder='What do you want to say?'/>
                        </div>
                        <div className='mt-5'>
                            <button type='submit' className='bg-teal-400 text-white py-2 px-5'>Send</button>
                        </div>
                    </form>
                </div>
        </div>
        </div>
    </section>
    )
}

export default ContactForm