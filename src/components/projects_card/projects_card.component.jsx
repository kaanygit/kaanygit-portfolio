import {Link} from 'react-router-dom';
import {FiGithub} from 'react-icons/fi';
import {SiWebflow} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';

import {ProjectCardContainer,ImgUrl,WebLink,GitLink,Footer,ImageLinks,ProjectName,GithubLink,WebsiteLink,ReactIcon} from './projects_card.style.jsx';

const ProjectsCard=({project})=>{
    const {name,imageUrl,lang,website,githubLink}=project;
    return  (
        <ProjectCardContainer>
                <ImageLinks>
                    <ImgUrl src={imageUrl} alt={`${name}`} />
                    <GitLink>
                        <WebLink><Link to={`${githubLink}`}><GithubLink><FiGithub/></GithubLink></Link></WebLink>
                        <WebLink><Link to={`${website}`}><WebsiteLink><SiWebflow/></WebsiteLink></Link></WebLink>
                    </GitLink>
                </ImageLinks>
                <Footer>
                    <ProjectName>{name.toUpperCase()}</ProjectName>
                    <ReactIcon><h1><FaReact/></h1></ReactIcon>
                </Footer>
        </ProjectCardContainer>

    )
};

export default ProjectsCard;