import {Link} from 'react-router-dom';
import {FiGithub} from 'react-icons/fi';
import {SiWebflow} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';

import './projects_card.style.css';

const ProjectsCard=({project})=>{
    const {name,imageUrl,lang,website,githubLink}=project;
    return  (
        <div className='project-card-continer'>
            <div className='img-around'>
                <img src={imageUrl} alt={`${name}`} />
                <div className='div-name'>
                    <span className='span-name'>{name.toUpperCase()}</span>
                </div>
                <div className='denme'>
                    <div className='footer'>
                        <span className='name'><h1><FaReact/></h1></span>
                    </div>
                    <div className='git-web'>
                        <span className='link'><Link to={`${website}`}><h1><FiGithub/></h1></Link></span>
                        <span className='link'><Link to={`${githubLink}`}><h1><SiWebflow/></h1></Link></span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectsCard;