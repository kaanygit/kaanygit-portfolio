import { FC, Fragment, useEffect, useState} from 'react';
import { Outlet,Link } from 'react-router-dom';
import {FiGithub,FiMenu} from 'react-icons/fi';
import  {BsMoonFill, BsSun, BsTwitter} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

import {useDispatch,useSelector} from 'react-redux';
import { setDarkMode } from '../../redux/darkmode/darkmode.action';
import { getDarkmode } from '../../redux/darkmode/darkmode.selector';
import { MenuHandler, MenuItem, MenuList,Menu } from '@material-tailwind/react';




const Navigation:FC=()=>{
    const [isActive, setActive] = useState<boolean>(true);
    const [darkmode,setDarkmode]=useState<boolean>(false);
    const dispatch=useDispatch();
    const darkmodeValue=useSelector(getDarkmode).darkmode;
    useEffect(()=>{
        if(darkmodeValue===true){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark')
        }
    },[darkmodeValue])
    // const handleToggle = ():void => {
    //     setActive(!isActive);
    // };
    const handleDarkmode=():void=>{
        setDarkmode(!darkmode);
        dispatch(setDarkMode(darkmode));
    }
    return(
        <Fragment>
            <nav className='w-full bg-text-color-2 dark:bg-dark-color-1 overlow-hidden top-0 transition-all duration-500 ease shadow-xl  z-50 text-xl xl:p-9 lg:p-19 md:p-7 sm:p-5   transition duration-200 flex'>
                  <div className='flex w-full h-full items-center justify-center text-center  '>
                    <div className='w-full h-full justify-between text-center flex'>
                        <div className='w-full h-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 justify-center text-center items-center'>
                            <div className='w-full h-full flex lg:block md:hidden sm:hidden'>
                                <div className='text-text-color-1 dark:text-text-color-2 font-medium items-center justify-center w-full h-full flex '>
                                    <div className='flex justify-center items-center text-center w-full h-full '>
                                        <div><Link to="/" className='home-link transition-all duration-500 ease hover:text-gray-400  cursor-pointer m-5'>Home</Link></div>
                                        <div><Link to="/projects" className='projects-link transition-all duration-500 ease hover:text-gray-400 cursor-pointer m-5'>Projects</Link></div>
                                        <div><Link to="/contact" className='contact-link transition-all duration-500 ease hover:text-gray-400  cursor-pointer m-5'>Contact</Link></div>
                                        <div><Link to="/about" className='about-link transition-all duration-500 ease hover:text-gray-400  cursor-pointer m-5'>About</Link></div>
                                    </div>
                                </div>   
                            </div>
                            <div className='items-center justify-center text-center w-full '>
                                <Link to='/'><span className='nameLink w-full text-center items-center text-text-color-1 dark:text-text-color-2 dark:hover:text-gray-300 justify-center lg:text-4xl md:text-4xl sm:text-3xl tracking-wider font-bold'>Kaanygit</span></Link>
                            </div>
                            <div className='flex justify-end  text-center lg:text-xl md:text-xl smd:text-xl sm:text-sm  items-center justify-items-end pr-5 w-full'>
                                <div><Link to='https://github.com/kaanygit'><span className='github text-black dark:text-white dark:hover:text-gray-300 hover:text-gray-600'><FiGithub/></span></Link></div>
                                <div className='pl-5'><Link to='https://twitter.com/kaanygit'><span className='twitter text-twitter-color hover:text-sky-800'><BsTwitter/></span></Link></div>
                                <div className='pl-5'><Link to='https://www.linkedin.com/in/yasinkaanyigit1'><span className='linkedin text-linkedin-color hover:text-blue-500'><FaLinkedinIn/></span></Link></div>
                                <div className='pl-5 flex'><button onClick={handleDarkmode}><span className='text-center justify-center items-center lg:text-base md:text-base smd:text-sm sm:text-sm'>{!darkmodeValue?<BsMoonFill/>:<BsSun className='text-white'/>}</span></button></div>
                                <div className='menuBar lg:hidden md:block relative'>
                                    <Menu>
                                        <MenuHandler>
                                            <button className='menu-icon  text-color-1 cursor-pointer  pl-4 lg:text-2xl md:text-xl smd:text-xl  sm:text-sm h-full  justify-center text-center flex '>{isActive?<FiMenu/>:<AiOutlineClose/>}</button>                                          
                                        </MenuHandler>
                                        <MenuList>
                                        <MenuItem className='hover:text-black font-medium text-lg'><Link to='/'>Home</Link></MenuItem>
                                        <MenuItem className='hover:text-black font-medium text-lg'><Link to='/projects'>Projects</Link></MenuItem>
                                        <MenuItem className='hover:text-black font-medium text-lg'><Link to='/contact'>Contact</Link></MenuItem>
                                        <MenuItem className='hover:text-black font-medium text-lg'><Link to='/about'>About</Link></MenuItem>
                                        </MenuList>
                                    </Menu>
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

