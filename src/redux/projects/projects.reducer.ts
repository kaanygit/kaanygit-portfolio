import { PROJECTS_TYPES, ProductActionTypes, ProjectsData } from "./projects.types";



interface initialStateInterfaceTS{
    products:ProjectsData[];
}

const initialState={
    products:[]
}

const productReducer =(state=initialState,action:ProductActionTypes):initialStateInterfaceTS=>{
    switch(action.type){
        case PROJECTS_TYPES.SET_PROJECTS:
            return{
                ...state,
                products:action.payload
            };
        default:
            return state
    }
}

export default productReducer