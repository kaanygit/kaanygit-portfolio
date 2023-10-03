"use client"

import { useEffect, useState } from "react";
import { Transition } from '@headlessui/react'
import Link from "next/link";
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import {BsInstagram,BsFillMoonFill,BsSun} from 'react-icons/bs'
import {Menu,MenuHandler,MenuItem,MenuList,Button} from '@/export.material'


const Navbar:React.FC=({params}:any)=>{
    const [showPageTransition,setShowPageTransition]=useState<boolean>(false);
    const [darkMode,setDarkMode]=useState<any>(localStorage.getItem('darkmode'));

    console.log(darkMode);

    const handleDarkMode=()=>{
        localStorage.setItem("darkmode",'true');
    }

    useEffect(()=>{
        console.log(darkMode);
    },[darkMode])

    useEffect(()=>{
        setShowPageTransition(true);
      },[])
    return(
        <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
            <nav className="bg-background-color-1 mx-auto flex p-8 justify-center items-center w-full flex-row transform duration-300 ease-in-out text-background-color-2">
                <div className="flex flex-1  justify-between items-center text-center text-lg 2xl:block xl:block lg:block md:hidden sm:hidden ">
                    <Link className="hover:text-background-color-3 transform duration-300 ease-in-out" href="/project">Project</Link>
                    <Link className="pl-3 hover:text-background-color-3 transform duration-300 ease-in-out" href="/about">About</Link>
                    <Link className="pl-3 hover:text-background-color-3 transform duration-300 ease-in-out" href="/blog">Blog</Link>
                    <Link className="pl-3 hover:text-background-color-3 transform duration-300 ease-in-out" href="/contact">Contact</Link>
                </div>
                <div className="flex flex-1 justify-center items-center text-center">
                    <Link href="/" className="text-4xl font-bold text-background-color-2">Kaan<span className="text-gray-600">ygit</span></Link>
                </div>
                <div className="flex flex-1 flex-row text-2xl justify-center items-center text-center">
                    <div className="flex 2xl:hidden xl:hidden lg:hidden md:block sm:block text-sm">
                        <Menu>
                            <MenuHandler>
                                <Button>Menü</Button>
                            </MenuHandler>
                            <MenuList>
                                <MenuItem>Menu1</MenuItem>
                                <MenuItem>Menu2</MenuItem>
                                <MenuItem>Menu3</MenuItem>
                                <MenuItem>Menu4</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                    <Link href="https://github.com/kaanygit"><AiFillGithub className="text-black"/></Link>
                    <Link href="https://www.instagram.com/kaancode.ui"><BsInstagram className="text-pink ml-3"/></Link>
                    <Link href="https://www.linkedin.com/in/yasinkaanyigit1/"><AiFillLinkedin className="text-linkedin-color ml-3"/></Link>
                    <span className="ml-3 text-white hidden"><BsSun/></span>
                    <span className="ml-3 text-black text-xl"><BsFillMoonFill onClick={handleDarkMode} className="cursor-pointer"/></span>
                </div>
            </nav>
        </Transition>
    )
}

export default Navbar