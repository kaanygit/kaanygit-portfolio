import { useContext } from 'react';
// import {CartContext} from '../../context/cart.context';
import './projects_card.style.scss';

const ProjectsCard=(project)=>{
    const {id,name,imgUrl,lang,website,githubLink}=project;
    return  (
        <div className='project-cart-container'>
            <img src={imgUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='name'>{lang}</span>
                <span className='name'>{website}</span>
                <span className='name'>{githubLink}</span>
            </div>
        </div>
    )
};

export default ProjectsCard;