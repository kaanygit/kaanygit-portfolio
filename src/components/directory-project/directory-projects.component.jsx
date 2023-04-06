import ProjectsItem from '../projects-item/projects-item.component';
import './directory-projects.style.scss';
const DirectoryProject=({projects})=>{
    return(
        <div className="directory-projects-container">
            {projects.map((project)=>(
                <ProjectsItem key={project.id} project={project}/>
            ))}
        </div>
    )
}
export default DirectoryProject;