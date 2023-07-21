import { FC, Fragment, useEffect, useState} from 'react';
import { Outlet,Link } from 'react-router-dom';
import {FiGithub,FiMenu} from 'react-icons/fi';
import  {BsMoonFill, BsSun, BsTwitter} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

import {useDispatch,useSelector} from 'react-redux';
import { setDarkMode } from '../../redux/darkmode/darkmode.action';
import NavigationCart from '../../components/navigation-cart/navigation-cart.component';
import { getDarkmode } from '../../redux/darkmode/darkmode.selector';




const Navigation:FC=()=>{
    const [isActive, setActive] = useState<boolean>(false);
    const [darkmode,setDarkmode]=useState<boolean>(false);
    const dispatch=useDispatch();
    const darkmodeValue=useSelector(getDarkmode).darkmode;

    const handleToggle = ():any  => {
        setActive(!isActive);
      };
    const handleDarkmode=():void=>{
        setDarkmode(!darkmode);
        dispatch(setDarkMode(darkmode));
    }
    useEffect(()=>{
        if(darkmodeValue===true){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[darkmodeValue])
    return(
        <Fragment>
            <nav className='w-full bg-text-color-2 dark:bg-dark-color-1 overlow-hidden top-0 transition-all duration-500 ease shadow-lg z-50 text-xl p-10 transition duration-200  '>
                  <div className='flex w-full h-full items-center justify-center text-center '>
                    <div className='w-full h-full justify-between text-center'>
                        <div className='grid grid-cols-3'>
                            <div className='flex'>
                                <div className='text-text-color-1 dark:text-text-color-2 font-medium items-center justify-center flex '>
                                    <div><Link to="/" className='home-link transition-all duration-500 ease hover:text-gray-400  cursor-pointer m-5'>Home</Link></div>
                                    <div><Link to="/projects" className='projects-link transition-all duration-500 ease hover:text-gray-400 cursor-pointer m-5'>Projects</Link></div>
                                    <div><Link to="/contact" className='contact-link transition-all duration-500 ease hover:text-gray-400  cursor-pointer m-5'>Contact</Link></div>
                                    <div><Link to="/about" className='about-link transition-all duration-500 ease hover:text-gray-400  cursor-pointer m-5'>About</Link></div>
                                </div>   
                            </div>
                            <div className='items-center justify-center text-center w-full  '>
                                <Link to='/'><span className='nameLink w-full text-center items-center text-text-color-1 dark:text-text-color-2 dark:hover:text-gray-300 justify-center text-4xl tracking-wider font-bold'>Kaanygit</span></Link>
                            </div>
                            <div className='flex justify-end  text-center text-xl items-center justify-items-end pr-5 w-full'>
                                <div><Link to='https://github.com/kaanygit'><span className='github text-black dark:text-white dark:hover:text-gray-300 hover:text-gray-600'><FiGithub/></span></Link></div>
                                <div className='pl-5'><Link to='https://twitter.com/kaanygit'><span className='twitter text-twitter-color hover:text-sky-800'><BsTwitter/></span></Link></div>
                                <div className='pl-5'><Link to='https://www.linkedin.com/in/yasinkaanyigit1'><span className='linkedin text-linkedin-color hover:text-blue-500'><FaLinkedinIn/></span></Link></div>
                                <div className='pl-5'><button onClick={handleDarkmode}><span className='text-center justify-center items-center flex text-base'>{!darkmodeValue?<BsMoonFill/>:<BsSun className='text-white'/>}</span></button></div>
                                <div className='menuBar flex md:hidden lg:hidden relative'>
                                    <span className='menu-icon  text-color-1 cursor-pointer block md:hidden pl-4 text-2xl' onClick={handleToggle}>{isActive?<FiMenu/>:<AiOutlineClose/>}</span>
                                    {!isActive?(<NavigationCart isActive={isActive} setActive={setActive}/>):null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet/>
        </Fragment>
    ); 
};

export default Navigation;

