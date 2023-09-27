"use client"

import { useAppSelector } from "@/redux/hooks"
import Navbar from "./navbar-component";



export function NavbarProvider(){
    const test=useAppSelector(state=>state.startPageReducer.startPage)
    if(!test)return;
    
    return <Navbar/>
}