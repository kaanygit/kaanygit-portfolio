export enum DARK_MODE_TYPES{
    SET_DARK_MODE="SET_DARK_MODE"    
}

export interface DarkModeType{
    darkmode:boolean,
}

export interface DarkModeAction{
    type:DARK_MODE_TYPES.SET_DARK_MODE,
    payload:boolean
}


