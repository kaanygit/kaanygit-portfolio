import { DARK_MODE_TYPES } from "./darkmode.types"



interface initialStateInterfaceTS{
    darkmode:boolean
};
type DarkModeAction = {
    type: string;
    payload: boolean;
  };

const initialState={
    darkmode:false
}


const darkmodeReducer=(state=initialState,action:DarkModeAction):initialStateInterfaceTS=>{
    switch(action.type){
        case DARK_MODE_TYPES.SET_DARK_MODE:
            return{
                ...state,
                darkmode:action.payload,
            };
        default:
            return state
    }
}

export default darkmodeReducer;