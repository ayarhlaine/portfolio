import { useRef, useState } from 'react';
import { styles } from '../styles';
import emailjs from '@emailjs/browser';

const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

const ContactForm = () => {
    const form = useRef();
    const [visible, setVisible] = useState(false);

    const showMessage = () => {
        setVisible(true);
        setTimeout(() => {
            setVisible(false)
        }, 5000)
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, form.current, EMAIL_PUBLIC_KEY)
            .then((result) => {
                if(result.text === 'OK') {
                    showMessage()
                }
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
    <section className={`${styles.padding}`}>
        <div className={`bg-black-200 ${styles.padding} md:w-[100%] lg:w-[70%]`}>
            <h1 className={`${styles.sectionSubHeading}`}>Get In Touch</h1>
            <h1 className={`${styles.sectionHeading}`}>Contact.</h1>
            <div className="flex w-full mt-5 flex-col">
                <div className='w-full md:w-[80%]'>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='mt-5'>
                            <label className='text-white-100'>Your Name</label>
                            <input name='name' type="text" className='mt-5 p-3 w-[100%] outline-0 text-black' placeholder='What is your name?' required/>
                        </div>
                        <div className='mt-5'>
                            <label className='text-white-100'>Your Email</label>
                            <input name='email' type="text" className='mt-5 p-3 w-[100%] outline-0 text-black' placeholder='What is your email?' required/>
                        </div>
                        <div className='mt-5'>
                            <label className='text-white-100'>Your Message</label>
                            <textarea name='message' className='mt-5 p-3 w-[100%] outline-0 text-black' placeholder='What do you want to say?' required/>
                        </div>
                        <div className='mt-5'>
                            <button type='submit' className='bg-teal-400 text-white py-2 px-5'>Send</button>
                        </div>
                        {
                            visible && <div className='mt-3'>
                               <div className="flex p-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50" role="alert">
                                    <svg aria-hidden="true" 
                                    className="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20" 
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" 
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" 
                                        clipRule="evenodd"></path>
                                    </svg>
                                    <span className="sr-only">Info</span>
                                    <div>
                                        <span className="font-medium">Success!</span> Well received your message! I will get back to you as soon as possible.
                                    </div>
                                </div>
                            </div>
                        }
                    </form>
                </div>
        </div>
        </div>
    </section>
    )
}

export default ContactForm