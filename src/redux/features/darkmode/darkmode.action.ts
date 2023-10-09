import { DARK_MODE_TYPES } from "./darkmode.types";



export const setOpenDarkMode=()=>({
    type:DARK_MODE_TYPES.DARK_MODE_OPEN,
    payload:true
});

export const setClosedDarkMode=()=>({
    type:DARK_MODE_TYPES.DARK_MODE_CLOSED,
    payload:false
})