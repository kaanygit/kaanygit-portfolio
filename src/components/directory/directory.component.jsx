import { Link } from 'react-router-dom';
import './directory.style.css';
const Directory=()=>{
    return(
        <div className="page">
            <div className="col cols0">
                <span className="hello">Hello👋</span>
                <h1 className='im'>I'm <span className="nameSurname">Yasin Kaan Yiğit</span></h1>
                <p className='content'>Hi, I'm Yasin. I'm full stack developer and this is my portfolio</p>
                <div className="button">
                    <a href='/'><button>Download CV</button></a>
                    <Link to='/contact'><button>Contact Me</button></Link>
                </div>
            </div>
        </div>
    );
}
export default Directory;
