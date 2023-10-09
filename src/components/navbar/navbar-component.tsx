"use client"

import { useEffect, useState } from "react";
import { Transition } from '@headlessui/react'
import Link from "next/link";
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import {BsInstagram,BsFillMoonFill,BsSun} from 'react-icons/bs'
import {Menu,MenuHandler,MenuItem,MenuList,Button} from '@/export.material'
import {HiMenu} from 'react-icons/hi'
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setClosedDarkMode, setOpenDarkMode } from "@/redux/features/darkmode/darkmode.action";


const Navbar:React.FC=({params}:any)=>{
    const [showPageTransition,setShowPageTransition]=useState<boolean>(false);
    const dispatch=useAppDispatch();
    const darkmodeSelector:boolean=useAppSelector(state=>state.darkModeReducer.darkmode);

    
    const handleDarkModeOpen=()=>{
        dispatch(setOpenDarkMode());
    }
    const handleDarkModeClosed=()=>{
        dispatch(setClosedDarkMode());
    };

    useEffect(()=>{
        setShowPageTransition(true);
    },[])

    useEffect(()=>{
        if(darkmodeSelector===true){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[darkmodeSelector])


    console.log(darkmodeSelector);
    return(
        <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
            <nav className="bg-background-color-1 dark:bg-dark-color-2 mx-auto flex p-8 justify-center items-center w-full flex-row transform duration-300 ease-in-out text-background-color-2 dark:text-background-color-1 dark:border-b border-background-color-3">
                <div className="flex flex-1  justify-between items-center text-center text-lg 2xl:block xl:block lg:block md:hidden sm:hidden ">
                    <Link className="hover:text-background-color-3 transform duration-300 ease-in-out" href="/project">Project</Link>
                    <Link className="pl-3 hover:text-background-color-3 transform duration-300 ease-in-out" href="/about">About</Link>
                    <Link className="pl-3 hover:text-background-color-3 transform duration-300 ease-in-out" href="/blog">Blog</Link>
                    <Link className="pl-3 hover:text-background-color-3 transform duration-300 ease-in-out" href="/contact">Contact</Link>
                </div>
                <div className="flex flex-1 justify-center items-center text-center">
                    <Link href="/" className="2xl:text-4xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-2xl font-bold text-background-color-2 dark:text-background-color-3">Kaan<span className="text-gray-600 dark:text-linkedin-color">ygit</span></Link>
                </div>
                <div className="flex flex-1 flex-row text-2xl justify-center items-center text-center">
                    <div className="flex 2xl:hidden xl:hidden lg:hidden md:block sm:block text-sm">
                        <Menu>
                            <MenuHandler>
                                <button className="flex justify-center items-center text-center text-background-color-2 dark:text-white lg:text-3xl md:text-2xl sm:text-2xl "><HiMenu/></button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem><Link href="/project">Project</Link></MenuItem>
                                <MenuItem><Link href="/about">About</Link></MenuItem>
                                <MenuItem><Link href="/blog">Blog</Link></MenuItem>
                                <MenuItem><Link href="/contact">Contact</Link></MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    <Link href="https://github.com/kaanygit"><AiFillGithub className="text-black dark:text-white ml-3"/></Link>
                    <Link href="https://www.instagram.com/kaancode.ui"><BsInstagram className="text-pink-500 ml-3"/></Link>
                    <Link href="https://www.linkedin.com/in/yasinkaanyigit1/"><AiFillLinkedin className="text-linkedin-color ml-3"/></Link>
                    <span className={`ml-3 text-white ${darkmodeSelector?"block":"hidden"}`}><BsSun onClick={handleDarkModeClosed}/></span>
                    <span className={`ml-3 text-black text-xl ${!darkmodeSelector?"block":"hidden"}`}><BsFillMoonFill onClick={handleDarkModeOpen} className="cursor-pointer"/></span>
                </div>
            </nav>
        </Transition>
    )
}

export default Navbar