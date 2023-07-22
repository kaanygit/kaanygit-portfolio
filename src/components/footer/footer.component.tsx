import { FC } from "react";
import { BsTwitter } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";



const FooterComponent:FC=()=>{
    return (
        <div className="w-full h-full justify-center items-center text-center dark:bg-dark-color-1 pb-10 pt-5 px-16">
            <div className="w-full h-full flex justify-center items-center text-center">
                <div className="w-full">
                    <div className="border-b-2 border-black  justify-center w-full pt-3 dark:border-brown"></div>
                    <div className="flex justify-center items-center pt-7 text-2xl">
                        <div><Link to='https://github.com/kaanygit'><span className='github text-black dark:text-white dark:hover:text-gray-300 hover:text-gray-600'><FiGithub/></span></Link></div>
                        <div className='pl-5'><Link to='https://twitter.com/kaanygit'><span className='twitter text-twitter-color hover:text-sky-800'><BsTwitter/></span></Link></div>
                        <div className='pl-5'><Link to='https://www.linkedin.com/in/yasinkaanyigit1'><span className='linkedin text-linkedin-color hover:text-blue-500'><FaLinkedinIn/></span></Link></div>        
                    </div>
                    <div className="pt-5 justify-center items-center text-center dark:text-text-color-4 text-sm"><p>Developed  by Yasin Kaan Yigit © 2023</p></div>
                </div>
            </div>
        </div>
    )
}


export default FooterComponent