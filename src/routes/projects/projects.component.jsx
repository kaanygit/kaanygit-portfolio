import { useContext,Fragment } from 'react';
import { ProjectsContext } from '../../context/get_projects.context';
import ProjectsCard from '../../components/projects/projects_card.component';
import { firestoreGetProjects } from '../../utils/firebase/firebase';
import './projects.style.scss';


const Projets=()=>{
  const {projectsMap}=useContext(ProjectsContext);
  return(
      <Fragment>
        {
          Object.keys(projectsMap).map(title=>(
            <Fragment key={title}>
              <h2>{title}</h2>
              <div className='projects-container'>
                {Array.isArray(projectsMap[title]) && projectsMap[title].map((project)=>(
                  <ProjectsCard key={project.id} project={project}/>
                ))}
              </div>
            </Fragment>
          ))};
      </Fragment>
  );
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