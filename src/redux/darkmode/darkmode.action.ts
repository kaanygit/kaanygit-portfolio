import { DARK_MODE_TYPES, DarkModeAction } from "./darkmode.types";



export const setDarkMode=(darkmode:boolean):DarkModeAction=>({
    type:DARK_MODE_TYPES.SET_DARK_MODE,
    payload:darkmode,
})