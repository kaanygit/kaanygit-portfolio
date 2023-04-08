import { createContext,useState} from "react";
import PROJECTS from '../project.json';
 
export const ProjectsContext=createContext({
    projects:[],
});
export const ProjectsProvider=({children})=>{
    const [projects,setProject]=useState(PROJECTS);
    const value={projects};
    return(
        <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>
    )
};

