import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "./projetcs.action";
import {getCollectionDocuments} from '../../utils/firebase/firebase.utils'
import { ProjectsData } from "./projects.types";


const ProjectsApi=()=>{
    const dispatch=useDispatch();
    useEffect(()=>{
        const getCategoriesMap=async()=>{
           const categoryMap= await getCollectionDocuments();
           const projectsMap=categoryMap.portfolioPage;
           dispatch(setProducts(projectsMap));
        };
        getCategoriesMap();
    },[]);
}


export default ProjectsApi;