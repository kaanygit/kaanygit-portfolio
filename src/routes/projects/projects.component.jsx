import { useContext } from 'react';
import {ProjectsContext} from '../../context/project.context';
import ProjectsCard from '../../components/projects_card/projects_card.component';
import './projects.style.css';


const Projets=()=>{
  const  {projects} =useContext(ProjectsContext);
  return (
      <div className='projects-container'>
        {projects.map((project)=>(
          <ProjectsCard key={project.id} project={project}/>
        ))}
      </div>
  )
};

export default Projets;

















// const Projects=()=>{
//     const projects=[
//         {
//           id:1,
//           title:'Proje-1',
//           "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
//         },
//         {
//           id:2,
//           title:'Proje-2',
//           "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
//         },
//         {
//           id:3,
//           title:'Proje-3',
//           "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
//         },
//         {
//           id:4,
//           title:'Proje-4',
//           "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
//         },
//         {
//           id:5,
//           title:'Proje-5',
//           "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
//         },
//         {
//           id:5,
//           title:'Proje-5',
//           "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
//         },
//         {
//           id:5,
//           title:'Proje-5',
//           "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
//         },
//         {
//           id:5,
//           title:'Proje-5',
//           "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
//         }
//       ]
//     return(
//         <div className='projects-page'>
//             <Outlet/>
//             <DirectoryProject projects={projects} />
//         </div>
//     );
// }






// export default Projects;