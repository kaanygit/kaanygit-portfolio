import DirectoryProject from '../../components/directory-project/directory-projects.component';
import {Outlet} from 'react-router-dom';
import './projects.style.scss';

const Projects=()=>{
    const projects=[
        {
          id:1,
          title:'Proje-1',
          "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
          id:2,
          title:'Proje-2',
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
          id:3,
          title:'Proje-3',
          "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
          id:4,
          title:'Proje-4',
          "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
          id:5,
          title:'Proje-5',
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        },
        {
          id:5,
          title:'Proje-5',
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        },
        {
          id:5,
          title:'Proje-5',
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        },
        {
          id:5,
          title:'Proje-5',
          "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
        }
      ]
    return(
        <div className='projects-page'>
            <Outlet/>
            <DirectoryProject projects={projects} />
        </div>
    );
}

export default Projects;