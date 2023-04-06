import { Fragment, useState} from 'react';
import { Outlet,Link } from 'react-router-dom';
import {FiGithub,FiMenu} from 'react-icons/fi';
import  {BsTwitter} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import './navigation.style.css';


const Navigation=()=>{
    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };
    return(
        <Fragment>
            <header>
                <h1 className='webSiteName'><Link to='/'><h3>Kaanygit</h3></Link></h1>
                <ul className={`navbar ${isActive ? "" : "open"}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                <div className='social-media-links'>
                    <a href='https://github.com/kaanygit' className='github'><FiGithub/></a>
                    <a href='https://twitter.com/kaanygit1' className='twitter'><BsTwitter/></a>
                    <a href='https://linkedin.com/in/yasinkaanyigit1' className='linkedin'><FaLinkedinIn/></a>
                    <div className='menu-icon' onClick={handleToggle}><FiMenu/></div>
                </div>
            </header>
            <Outlet/>
        </Fragment>
    ); 
};

export default Navigation;

