import { combineReducers } from "redux";
import productReducer from "./projects/projects.reducer";
import darkmodeReducer from "./darkmode/darkmode.reducer";




export const rootReducer=combineReducers({
    products:productReducer,
    darkmode:darkmodeReducer
})

type RootState=ReturnType<typeof rootReducer>;

export default RootState;