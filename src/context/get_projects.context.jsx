// import {firestoreGetProjects} from '../utils/firebase/firebase';
// import { createContext,useEffect,useState } from 'react';


// export const ProjectsContext=createContext({
//     projectsMap:{},
// });

// export const ProjectsProvider=({children})=>{
//     const [projectsMap,setProjectsMap]=useState({});
//     useEffect(()=>{
//         const getProjectsMap=async ()=>{
//             const projectMap=await firestoreGetProjects();
//             setProjectsMap(projectMap);
//             console.log(projectMap);
//         };
//         getProjectsMap();
//     },[]);
//     const value={projectsMap};
//     return (
//         <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>
//     )
// };

