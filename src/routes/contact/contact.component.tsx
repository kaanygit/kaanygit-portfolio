import { FC, useState } from 'react';
import {Outlet} from 'react-router';
import developerPhoto from '../../assets/developerImagepng.png'
import { Button, Input, Textarea } from '@material-tailwind/react';

const Contact:FC=()=>{
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [formVisible, setFormVisible] = useState<boolean>(true);
    const [message,setMessage]=useState<string>("");
    const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);


    const handleNameSubmit=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setName(e.target.value);
    };
    const handleEmailSubmit=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value);
    };
    const handleTextSubmit=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setMessage(e.target.value);
    };
    const handleSubmit=(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setFormVisible(false);
        setSubmitSuccess(true);
    };

    return(
        <>
                {submitSuccess?(
                    <div className='w-full h-screen items-center text-center justify-center flex mx-auto dark:bg-dark-color-1 transition-all duration-500 ease dark:shadow-deneme dark:text-text-color-4'>
                        <span className='text-5xl font-medium'>Message Sent ! 😎</span>
                        
                    </div>
                ):(
                    <div className='w-full h-screen flex items-center px-16 pb-16 pt-10 lg:py-0 sm:py-10   mx-auto transition-all duration-500 ease dark:bg-dark-color-1 dark:shadow-deneme'>
                        <div className='w-full p-10 h-full'>
                            <div className='grid lg:grid-cols-2 gap-3 md:grid-cols-1 sm:grid-cols-1 w-full h-full'>
                                <div className='text-center justify-center w-full h-full items-center flex'>
                                    <div className='w-full h-full justify-center items-center flex'>
                                        <div className='w-full'>
                                            <span className='text-5xl justify-start flex dark:text-text-color-4 pl-2'>Contact Form</span>
                                            <div className='bg-gray-300 dark:bg-dark-color-2 p-3 rounded-2xl mt-5 w-full h-full'>
                                                <form onSubmit={handleSubmit}>
                                                    <div className='pt-10 w-full '>
                                                        <input placeholder='Name Surname' className='relative w-full min-w-[100px] h-10 rounded-lg focus:ring-4 outline-offset-4 outline-none  placeholder-slate-500' type='text' onChange={handleNameSubmit} required/>
                                                    </div>
                                                    <div className='pt-10'>
                                                        <input placeholder='Email' type='email' className='relative w-full min-w-[100px] h-10 rounded-lg focus:ring-4 outline-offset-4 outline-none placeholder-slate-500' onChange={handleEmailSubmit} required/>
                                                    </div>
                                                    <div className='pt-10'>
                                                        <textarea placeholder='Message'  className='relative w-full min-w-[100px] h-10 rounded-lg  focus:ring-4 outline-offset-4 outline-none placeholder-slate-500 resize-y overflow-y' onChange={handleTextSubmit} cols={200} rows={100} minLength={50} required/>
                                                    </div>
                                                    <div className='pt-10'>
                                                        <Button type='submit' className='w-full'>Send Message</Button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <div className='w-full h-full  justify-center'>
                                    <img src={developerPhoto} className='h-full h-full ' alt='developerContactPhoto'/>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                }
            <Outlet/>
        </>
    )
}

export default Contact;

