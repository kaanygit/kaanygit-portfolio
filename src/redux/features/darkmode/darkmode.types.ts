export enum DARK_MODE_TYPES{
    DARK_MODE_OPEN="DARK_MODE_OPEN",
    DARK_MODE_CLOSED="DARK_MODE_CLOSED",
}

export interface DarkMode{
    darkmode:boolean
};

export const initialStateDarkMode:DarkMode={
    darkmode:false
}