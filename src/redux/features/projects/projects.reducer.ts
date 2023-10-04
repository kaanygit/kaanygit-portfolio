import { PROJECT_DATA_TYPES } from "./projects.types";

interface InitialState{
    project:[];
}

const initialState:InitialState={
    project:[]
}



const projectReducer=(state=initialState,action:any)=>{
    switch(action.type){
        case PROJECT_DATA_TYPES.SET_PROJECT_DATA:
            return{
                ...state,
                project:action.payload
            }
        default:
            return state
    }
}

export default projectReducer;


