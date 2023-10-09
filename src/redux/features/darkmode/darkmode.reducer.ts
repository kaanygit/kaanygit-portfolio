import { DARK_MODE_TYPES, initialStateDarkMode } from "./darkmode.types";



const darkModeReducer=(state=initialStateDarkMode,action:any)=>{
    switch(action.type){
        case DARK_MODE_TYPES.DARK_MODE_OPEN:
            return{
                ...state,
                darkmode:true
            };
        case DARK_MODE_TYPES.DARK_MODE_CLOSED:
            return{
                ...state,
                darkmode:false
            };
        default:
            return state
    }
};

export default darkModeReducer