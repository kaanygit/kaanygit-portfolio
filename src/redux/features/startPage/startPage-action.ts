import { start } from "repl";
import { START_PAGE_TYPES } from "./startPage-types";


export const startPage=()=>({
    type:START_PAGE_TYPES.START_PAGE_MOV,
    payload:true
})

export const stopPage=()=>({
    type:START_PAGE_TYPES.STOP_PAGE_MOV,
    payload:false
})