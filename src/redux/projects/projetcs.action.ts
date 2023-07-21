import { PROJECTS_TYPES, ProjectsData, SetProductsAction } from "./projects.types";




export const setProducts=(products:ProjectsData[]):SetProductsAction=>({
    type:PROJECTS_TYPES.SET_PROJECTS,
    payload:products
})