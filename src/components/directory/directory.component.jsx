import { Link } from 'react-router-dom';
import MyImage from '../../assets/1671227530350.jpg';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3Full} from 'react-icons/di';
import {IoLogoJavascript} from 'react-icons/io';
import {FaReact,FaPhp} from 'react-icons/fa';
import {SiRedux} from 'react-icons/si';
import {DiPython} from 'react-icons/di';
import './directory.style.css';

const Directory=()=>{
    return(
        <section className='home'>
            <div className='home-text'>
                <h3 className='hello'>Hello 👋</h3>
                <h1 className='im'>I'm <span className="nameSurname">Yasin Kaan Yiğit</span></h1>
                <p>Hi, I'm Yasin. I'm full stack developer and this is my portfolio</p>
                <div className='icons'>
                    <h1 className='html5'><AiFillHtml5/></h1>
                    <h1 className='css3'><DiCss3Full/></h1>
                    <h1 className='javascript'><IoLogoJavascript/></h1>
                    <h1 className='react'><FaReact/></h1>
                    <h1 className='redux'><SiRedux/></h1>
                    <h1 className='php'><FaPhp/></h1>
                    <h1 className='python'><DiPython/></h1>
                </div>
                <div className="btn-div">
                     <a href='/'><button className='button'>Download CV</button></a>
                     <Link to='/contact'><button className='button'>Contact Me</button></Link>
                </div> 
            </div>
            <div className='home-image'>
                <img src={MyImage} alt='homePageImage'/>
            </div>
        </section>


    );
}
export default Directory;
