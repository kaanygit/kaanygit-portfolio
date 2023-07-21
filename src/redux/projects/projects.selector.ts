// import RootState from "redux/root-reducer";
import { ProjectsData } from "./projects.types";
import { createSelector } from "reselect";



export const selectProducts=(state:any):ProjectsData[]=>state.products.products;


export const getProjects=createSelector(
    [selectProducts],
    (projects)=>projects||[]
);