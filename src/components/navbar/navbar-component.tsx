"use client"

import { useEffect, useState } from "react";
import { Transition } from '@headlessui/react'
import Link from "next/link";
import {AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import {BsInstagram,BsFillMoonFill,BsSun} from 'react-icons/bs'

const Navbar:React.FC=()=>{
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
            <nav className="bg-background-color-1 mx-auto flex py-8 px-24 justify-center items-center w-full flex-row transform duration-300 ease-in-out text-white">
                <div>
                    <span  className="text-4xl font-bold">Kaanygit</span>
                </div>
                <div className="flex flex-1 flex-row justify-center text-lg">
                    <Link  href="/project">Project</Link>
                    <Link className="pl-3 " href="/about">About</Link>
                    <Link className="pl-3 " href="/blog">Blog</Link>
                    <Link className="pl-3 " href="/contact">Contact</Link>
                </div>
                <div className="flex flex-row text-2xl justify-center items-center text-center">
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