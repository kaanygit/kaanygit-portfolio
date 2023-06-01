import { useState } from 'react';
import {Outlet} from 'react-router';
import DeveloperPhoto from '../../assets/developerImage.jpg';
import { Link } from 'react-router-dom';


const Contact=()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [formVisible, setFormVisible] = useState(true);
    const [message,setMessage]=useState("");
    const [submitSuccess, setSubmitSuccess] = useState(false);


    const handleNameSubmit=(e)=>{
        setName(e.target.value);
    };
    const handleEmailSubmit=(e)=>{
        setEmail(e.target.value);
    };
    const handleTextSubmit=(e)=>{
        setMessage(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormVisible(false);
        setSubmitSuccess(true);
    };

    return(
        <>
                {submitSuccess?(
                    <div className='w-full h-96 items-center text-center justify-center flex mx-auto'>
                        <span className='text-5xl font-medium'>Mesaj Gönderildi ! 😎</span>
                        
                    </div>
                ):(
                    <div className='w-full relative grid  items-center px-20 lg:py-0 sm:py-10 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 mx-auto'>
                        <div>
                            <span className='contact-form-title flex text-center font-bold text-3xl'>Contact Form</span>
                            <form onSubmit={handleSubmit} className='sad flex flex-col items-center mt-5 bg-gray-200 rounded-xl w-full'>
                                <div className='w-full p-3'>
                                    <label className='label-box flex flex-col mt-3 text-xl'>
                                        Name : <input className='bg-gray-100 rounded-lg mt-2 placeholder-gray-400 py-2 text-base placeholder-pl-2 border border-gray-300 focus:outline-nonefocus:border-sky-500' placeholder='Name' value={name} onChange={handleNameSubmit} required/>
                                    </label>
                                </div>
                                <div className='w-full p-3'>
                                    <label className='label-box flex flex-col mt-3 text-xl'>
                                        Email : <input className='bg-gray-100 rounded-lg mt-2 placeholder-gray-400 py-2 text-base border border-gray-300 focus:outline-nonefocus:border-sky-500' value={email} onChange={handleEmailSubmit} placeholder='Email'required/>
                                    </label>
                                </div>
                                <div className='w-full p-3'>
                                    <label className='label-box flex flex-col mt-3 text-xl'>
                                        Message : <textarea className='w-full bg-gray-100 mt-3 p-2.5 text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400' minLength='15' placeholder='Send Message' value={message} onChange={handleTextSubmit} required/>
                                    </label>
                                </div>
                                <button type='submit' className='submit-button-contact-page mt-3 py-2 px-4 bg-sky-600 rounded-xl font-medium text-white text-center w-full hover:bg-sky-700'>SEND</button>
                            </form>
                        </div>
                        <div>
                            <img src={DeveloperPhoto} className='w-auto h-auto' alt='resim'/>
                        </div>
                    </div>
                )
                }
            <Outlet/>
        </>
    )
}

export default Contact;

