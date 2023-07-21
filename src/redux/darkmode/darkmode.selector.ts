import RootState from "../root-reducer";
import { createSelector } from "reselect";
import { DarkModeType } from "./darkmode.types";



export const getDarkmodes=(state:RootState):DarkModeType=>state.darkmode;

export const getDarkmode=createSelector(
    [getDarkmodes],
    (darkmode)=>darkmode
)