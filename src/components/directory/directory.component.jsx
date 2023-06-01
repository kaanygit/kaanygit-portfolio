import { Link } from 'react-router-dom';
import MyImage from '../../assets/1671227530350.jpg';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3Full} from 'react-icons/di';
import {IoLogoJavascript} from 'react-icons/io';
import {FaReact,FaPhp} from 'react-icons/fa';
import {SiRedux} from 'react-icons/si';
import {DiPython} from 'react-icons/di';
import { Fragment } from 'react';

const Directory=()=>{
    return(
        <Fragment>
            <section className='home justify-center items-center p-10 h-full border-box h-screen mx-auto w-full max-w-screen md:text-base sm:text-xs'>
                <div className='flex home-page grid h-full lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 justify-center items-center'>
                    <div className='justify-center items-center mx-auto whitespace-nowrap '>
                        <div>
                            <h3 className='hello font-medium text-text-color-3 text-xl tracking-wider'>Hello 👋</h3>
                        </div>
                        <div className='text-5xl tracking-widest mt-3 whitespace-nowrap'>
                            <h1 className='im text-black whitespace-nowrap'>I'm <span className="nameSurname text-text-color-1 whitespace-nowrap">Yasin Kaan Yiğit</span></h1>
                        </div> 
                        <div className='mt-5'>
                            <p className='whitespace-nowrap text-xl'>Hi, I'm Yasin. I'm full stack developer and this is my portfolio</p>
                        </div>  
                        <div className='mt-5'>
                            <div className='icons flex text-2xl'>
                                <h1 className='html5 text-html5-color p-3 transform hover:scale-110'><AiFillHtml5/></h1>
                                <h1 className='css3 text-css3-color p-3 transform hover:scale-110'><DiCss3Full/></h1>
                                <h1 className='javascript text-javascript-color p-3 transform hover:scale-110'><IoLogoJavascript/></h1>
                                <h1 className='react text-react-color p-3 transform hover:scale-110'><FaReact/></h1>
                                <h1 className='redux text-redux-color p-3 transform hover:scale-110'><SiRedux/></h1>
                                <h1 className='php text-php-color p-3 transform hover:scale-110'><FaPhp/></h1>
                                <h1 className='python text-python-color p-3 transform hover:scale-110'><DiPython/></h1>
                            </div>
                        </div>
                        <div>
                            <div className="btn-div justify-evenly items-center">
                                <Link to='/'><button className='button shadow-buttonxl bg-button-color text-white font-medium py-2 px-2 rounded-3xl transition ease duration-800 capitalize tracking-wide hover:scale-105 m-3'>Download CV</button></Link>
                                <Link to='/contact'><button className='button shadow-buttonxl bg-button-color text-white font-medium py-2 px-2 rounded-3xl transition ease duration-800 capitalize tracking-wide hover:scale-105 m-3'>Contact Me</button></Link>
                            </div> 
                        </div>
                    </div>

                    <div className='justify-center text-center items-center flex md:mt-10 sm:mt-10'>
                        <label className='home-image w-9/12 max-w-full'>
                            <img src={MyImage} className='rounded-full border-black border-8' alt='homePageImage'/>
                        </label>
                    </div>
                </div>
            </section>

            
        </Fragment>
    );
}
export default Directory;
