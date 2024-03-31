import PageLayout from "../components/page-layout";
// import landscapeImageSrc from '../assets/images/landscape.jpg'
import eiffelTowerImgSrc from '../assets/images/eiffel-tower.jpg'
import { SyntheticEvent, useRef, useState } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FaRegThumbsUp } from "react-icons/fa";

const FORMSPREE_URL = 'https://formspree.io/f/xkndgzvb';
function ContactPage() {
    const [hasError, setHasError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const formRef = useRef<HTMLFormElement>(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: SyntheticEvent) => {
        e.stopPropagation();
        e.preventDefault();

        if (!formRef.current?.checkValidity()) {
            formRef.current?.reportValidity();
            return;
        }

        setHasError(false);
        setLoading(true);

        try {
            const res = await fetch(FORMSPREE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, subject, message }),
            });
    
            if (res.ok){
                setSubmitted(true);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
            } else {
                setHasError(true);
            }
        } catch (error){
            setHasError(true);
        }

        setLoading(false);
    }

    return (
        <PageLayout
            path="/contact"
            heroImgSrc={eiffelTowerImgSrc}
            heroImgInfo={{ camera: 'Fujifilm XT-4', location: 'Paris, France', lens: '18-55mm' }}>

            {submitted && 
                <>
                    <div className="flex p-10 mt-20 mb-4 text-sm text-green-1000 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-300" role="alert">
                        <FaRegThumbsUp className="mr-4" /> Your message has been sent! I'll get back to you as soon as I can.
                    </div>
                    <button className="mb-20" onClick={() => setSubmitted(false)}> Return to Contact Form </button>
                </>
            }

            {!submitted && <>
                {hasError && 
                    <div className="flex p-4 mt-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <MdOutlineErrorOutline className="mr-5" /> There was an error sending your message. Please try again later. 
                    </div>
                }

                <h1 className='mt-16'> Get in touch </h1>
                <p> If you'd like to get in touch, please fill out the form below and I'll get back to you as soon as possible. </p>
                
                <form className="mb-16" ref={formRef}>
                    <div className='form-group'>
                        <label htmlFor='name'>Name</label>
                        <input
                            value={name}
                            onInput={e => setName(e.currentTarget.value)}
                            type='text'
                            id='name'
                            name='name'
                            placeholder="Name"
                            disabled={loading}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input
                            value={email}
                            onInput={e => setEmail(e.currentTarget.value)}
                            type='email'
                            id='email'
                            name='email'
                            placeholder="you@email.com"
                            disabled={loading}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='subject'>Subject</label>
                        <input
                            value={subject}
                            onInput={e => setSubject(e.currentTarget.value)}
                            type='text'
                            id='subject'
                            name='subject'
                            placeholder="Subject"
                            disabled={loading}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='message'>Message</label>
                        <textarea
                            value={message}
                            onInput={e => setMessage(e.currentTarget.value)}
                            id='message'
                            name='message'
                            placeholder="Message"
                            disabled={loading}
                            required
                        />
                    </div>
                    <button type='button' disabled={loading} onClick={handleSubmit}>
                        Submit
                        {loading && <span className='spinner ml-5'></span>}
                    </button>
                </form>
            </>}

            {/* {hasError && 
                <div className="flex p-4 mt-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <MdOutlineErrorOutline className="mr-5" /> There was an error sending your message. Please try again later. 
                </div>
            }

            <h1> Get in touch </h1>
            <p> If you'd like to get in touch, please fill out the form below. </p>
            
            <form className="mb-16" ref={formRef}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                        value={name}
                        onInput={e => setName(e.currentTarget.value)}
                        type='text'
                        id='name'
                        name='name'
                        placeholder="Name"
                        disabled={loading}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        value={email}
                        onInput={e => setEmail(e.currentTarget.value)}
                        type='email'
                        id='email'
                        name='email'
                        placeholder="you@email.com"
                        disabled={loading}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='subject'>Subject</label>
                    <input
                        value={subject}
                        onInput={e => setSubject(e.currentTarget.value)}
                        type='text'
                        id='subject'
                        name='subject'
                        placeholder="Subject"
                        disabled={loading}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Message</label>
                    <textarea
                        value={message}
                        onInput={e => setMessage(e.currentTarget.value)}
                        id='message'
                        name='message'
                        placeholder="Message"
                        disabled={loading}
                        required
                    />
                </div>
                <button type='button' disabled={loading} onClick={handleSubmit}>
                    Submit
                    {loading && <span className='spinner ml-5'></span>}
                </button>
            </form> */}
            <hr />
        </PageLayout>
    )
}

export default ContactPage;