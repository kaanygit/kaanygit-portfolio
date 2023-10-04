import { PROJECT_DATA_TYPES } from "./projects.types";



export const setProjectData=(project:any)=>({
    type:PROJECT_DATA_TYPES.SET_PROJECT_DATA,
    payload:project
})