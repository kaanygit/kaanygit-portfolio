import { FC } from "react";
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3Full} from 'react-icons/di';
import {IoLogoJavascript} from 'react-icons/io';
import {FaReact,FaPhp} from 'react-icons/fa';
import {SiRedux, SiTypescript} from 'react-icons/si';
import {DiPython} from 'react-icons/di';


const HomeSkilsComponent:FC=()=>{
    return(
        <div className="w-ful h-full justify-center items-center text-center  p-16 dark:bg-dark-color-1 transition-all duration-500 ease">
            <div className="w-full h-full justify-center text-center items-center">
                <div className="w-full h-full justify-start text-6xl tracking-wide">
                    <div className="flex dark:text-text-color-4">My Skills</div>
                    {/* <div className="border-b-4 border-black flex justify-start w-64 pt-3 dark:border-white"></div> */}
                </div>
                <div className="flex grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2  gap-5 justify-center items-center text-center mt-5 text-4xl ">
                    <div className="justify-center flex text-html5-color transform"><span><AiFillHtml5 className="transition-all duration-200 ease hover:scale-110"/></span></div>
                    <div className="justify-center flex text-css3-color"><span><DiCss3Full className="transition-all duration-200 ease hover:scale-110"/></span></div>
                    <div className="justify-center flex text-javascript-color"><span><IoLogoJavascript className="transition-all duration-200 ease hover:scale-110"/></span></div>
                    <div className="justify-center flex text-react-color"><span><FaReact className="transition-all duration-200 ease hover:scale-110"/></span></div>
                    <div className="justify-center flex text-redux-color"><span><SiRedux className="transition-all duration-200 ease hover:scale-110"/></span></div>
                    <div className="justify-center flex text-php-color"><span><FaPhp className="transition-all duration-200 ease hover:scale-110"/></span></div>
                    <div className="justify-center flex text-python-color"><span><DiPython className="transition-all duration-200 ease hover:scale-110"/></span></div>
                    <div className="justify-center flex text-typescript-color"><span><SiTypescript className="transition-all duration-200 ease hover:scale-110"/></span></div>

                </div>
            </div>
        </div>
    )
}

export default HomeSkilsComponent