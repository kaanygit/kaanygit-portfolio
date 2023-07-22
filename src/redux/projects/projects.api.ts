import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./projetcs.action";
import { PROJECTS_DATA } from "../../projects";




const ProjectsApi=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        const getCategoriesMap=async()=>{
        //    const categoryMap= await getCollectionDocuments();
           const projectsMap=PROJECTS_DATA;
           dispatch(setProducts(PROJECTS_DATA));
        };
        getCategoriesMap();
    },[]);
}


export default ProjectsApi;