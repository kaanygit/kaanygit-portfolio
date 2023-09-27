import { START_PAGE_TYPES, startPageInitialStateInterface } from "./startPage-types"



const initialState:startPageInitialStateInterface={
    startPage:false
}

const startPageReducer=(state=initialState,action:any)=>{
    switch(action.type){
        case START_PAGE_TYPES.START_PAGE_MOV:
            return{
                ...state,
                startPage:true
            }
        case START_PAGE_TYPES.STOP_PAGE_MOV:
            return{
                ...state,
                startPage:false
            }
        default:
            return state
    }

}

export default startPageReducer