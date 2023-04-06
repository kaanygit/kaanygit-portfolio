import './projects-item.style.scss';
const ProjectsItem=({project})=>{
    const {imageUrl,title}=project;
    return(
            <div className="projects-container">
                <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}}/>
                <div className="category-body-container">
                    <h2>{title}</h2>
                </div>
            </div>
    )
}
export default ProjectsItem;