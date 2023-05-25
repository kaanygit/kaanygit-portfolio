import { Fragment, useState} from 'react';
import { Outlet,Link } from 'react-router-dom';
import {FiGithub,FiMenu} from 'react-icons/fi';
import  {BsTwitter} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';


const Navigation=()=>{
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };
    return(
        <Fragment>
            <header className='sticky w-full bg-text-color-2 h-auto fixed overlow-hidden top-0 transition-all duration-500 ease shadow-lg  z-50 text-xl lg:p-8 md:p-4 transition duration-200'>
                <div className='flex items-center justify-center text-center'>
                    <div className='websiteNameDiv flex-1 w-full text-center ' >
                        <Link to='/'><span className='nameLink w-full text-center items-center text-text-color-1 text-3xl tracking-wider font-bold'>Kaanygit</span></Link>
                    </div>
                    <div className='link-navbar flex-2 text-center justify-center items-center hidden md:block'>
                        <ul className={`navbar flex text-text-color-1 font-medium items-center justify-center`}>
                            <li><a href="/" className='home-link transition-all duration-500 ease hover:text-gray-400  cursor-pointer m-5'>Home</a></li>
                            <li><a href="/projects" className='projects-link transition-all duration-500 ease hover:text-gray-400 cursor-pointer m-5'>Projects</a></li>
                            <li><a href="/contact" className='contact-link transition-all duration-500 ease hover:text-gray-400  cursor-pointer m-5'>Contact</a></li>
                            <li><a href="/about" className='about-link transition-all duration-500 ease hover:text-gray-400  cursor-pointer m-5'>About</a></li>
                        </ul>
                    </div>
                    <div className='flex-1 '>
                        <div className='social-media-links flex w-full text-2xl items-center justify-center'>
                            <Link to='https://github.com/kaanygit'><label className='github text-black hover:text-gray-600'><FiGithub/></label></Link>
                            <Link to='https://twitter.com/kaanygit'><label className='twitter text-twitter-color hover:text-sky-600'><BsTwitter/></label></Link>
                            <Link to='https://www.linkedin.com/in/yasinkaanyigit1'><label className='linkedin text-linkedin-color hover:text-blue-800'><FaLinkedinIn/></label></Link>
                            <label className='menu-icon  text-text-color-1 cursor-pointer block md:hidden' onClick={handleToggle}><FiMenu/></label>
                        </div>
                    </div>  
                </div>
            </header>
            <Outlet/>
        </Fragment>
    ); 
};

export default Navigation;

