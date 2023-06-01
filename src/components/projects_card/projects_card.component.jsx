import {Link} from 'react-router-dom';
import {FiGithub} from 'react-icons/fi';
import {SiWebflow} from 'react-icons/si';
import {ImgUrl,WebLink,GitLink,ImageLinks,GithubLink,WebsiteLink} from './projects_card.style.jsx';
import { Fragment } from 'react';
import { SiTailwindcss,SiFirebase,SiMongodb } from 'react-icons/si';
import { FaReact,FaNodeJs } from 'react-icons/fa';


const ProjectsCard=({project})=>{
    const {name,imageUrl,lang,website,githubLink}=project;
    return  (        
        <Fragment>
            <div className='projects-card-container w-full flex flex-col h-96 items-center relative'>
                <div>
                    <ImageLinks>
                        <ImgUrl src={imageUrl} alt={`${name}`} />
                        <GitLink>
                            <WebLink><Link to={`${githubLink}`}><GithubLink><FiGithub/></GithubLink></Link></WebLink>
                            <WebLink><Link to={`${website}`}><WebsiteLink><SiWebflow/></WebsiteLink></Link></WebLink>
                        </GitLink>
                    </ImageLinks>
                    <div className='footer flex items-center justify-between'>
                        <span className="font-medium text-xl">{name.toUpperCase()}</span>
                        <span className='icons-spans flex text-3xl'>
                            {lang.includes('javasciprt') && <SiTailwindcss className='text-javasciprt-color'/>}
                            {lang.includes('typescript') && <SiTailwindcss className='text-typescript-color'/>}
                            {lang.includes('react')  && <FaReact className="text-react-color" />}
                            {lang.includes('tailwind') && <SiTailwindcss className='text-sky-700'/>}
                            {lang.includes('firebase') && <SiFirebase className='text-firebase-color'/>}
                            {lang.includes('mongodb') && <SiMongodb className=' text-mongodb-color'/>}
                            {lang.includes('nodejs') && <FaNodeJs className='text-nodejs-color'/>}
                        </span>
                    </div>
                </div>
            </div>
        </Fragment>

    )
};

export default ProjectsCard;