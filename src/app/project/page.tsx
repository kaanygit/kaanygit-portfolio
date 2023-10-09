"use client"
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@/export.material";

import React, {useState,useEffect} from 'react'
import { Transition } from '@headlessui/react'
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import {FiGithub} from 'react-icons/fi'
import {FaReact} from 'react-icons/fa'
import {TbBrandWebflow} from 'react-icons/tb'
import { SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import {BiLogoNodejs, BiLogoRedux, BiLogoTypescript} from 'react-icons/bi'
import { IoLogoJavascript } from "react-icons/io";
import { LoadingComponent } from "@/components/export.components";



const ProjectPage:React.FC=()=>{
    const [showPageTransition,setShowPageTransition]=useState<boolean>(false);
    const [loadingData,setLoadingData]=useState<boolean>(false);
    const projectData=useAppSelector(state=>state.projectReducer.project) ;
    const programmingLanguages=[
        'javascript',
        'typescript',
        'react',
        'tailwind',
        'firebase',
        'mongodb',
        'nodejs',
        'redux',
        'nextjs'
    ]

    useEffect(()=>{
      setShowPageTransition(true);
    },[])
    console.log(projectData);
    return(
        projectData.length===0?<LoadingComponent/>:
        <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
            <section className="mx-auto dark:bg-dark-color-2 flex min-h-full w-full flex-col items-center justify-center p-24 transform duration-300 ease-in-out">
                <div className="flex justify-center items-center w-full text-center text-background-color-2 dark:text-background-color-1 text-5xl font-bold mb-10"><span>Projects</span></div>
                <div className="flex grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 w-full">
                    {projectData.map((project:any,index:number)=>(
                        <div className="flex justify-center items-center text-center w-full h-full" key={index}>
                            <Card className="mt-6 w-96 dark:bg-gray-200 " >
                                <CardHeader color="blue-gray" className="relative 2xl:h-56 xl:h-56 lg:h-56 md:h-40 sm:h-28">
                                    <img
                                        src={project.imageUrl}
                                        alt="card-image"
                                    />
                                </CardHeader>
                                <CardBody >
                                    <Typography variant="h5" color="blue-gray" className="mb-2 dark:text-black">
                                        {project.name}
                                    </Typography>
                                    <Typography className="dark:text-black">
                                        {project.description}
                                    </Typography>
                                    <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                                        {project.lang.map((projectLangs:any,index:number)=>{                                   
                                            if (programmingLanguages.includes(projectLangs)){
                                                return (
                                                    <div className="text-xl" key={index}>
                                                        <Tooltip content={projectLangs} key={index}>
                                                            <span>
                                                            {projectLangs === 'react' && <FaReact className="text-react-color" />}
                                                            {projectLangs === 'javascript' && <IoLogoJavascript className="text-javascript-color"/>}
                                                            {projectLangs === 'typescript' && <BiLogoTypescript className="text-typescript-color"/>}
                                                            {projectLangs === 'tailwind' && <SiTailwindcss className="text-tailwind-color"/>}
                                                            {projectLangs === 'firebase' && <SiFirebase className="text-firebase-color"/>}
                                                            {projectLangs === 'mongodb' && <SiMongodb className="text-mongodb-color"/>}
                                                            {projectLangs === 'nodejs' && <BiLogoNodejs className="text-nodejs-color"/>}
                                                            {projectLangs === 'redux' && <BiLogoRedux className="text-redux-color"/>}
                                                            {projectLangs === 'nextjs' && <SiNextdotjs className="text-black"/>}
                                                            </span>
                                                        </Tooltip>
                                                    </div>
                                                );
                                            }return null; 
                                        })}
                                    </div>
                                </CardBody>
                                <CardFooter className="text-xl pt-3 flex items-center justify-center text-2xl">
                                    <Link href={project.githubLink} className='pr-2 text-black'><FiGithub/></Link>
                                    <Link href={project.website} className='pl-2 text-blue-500 '><TbBrandWebflow/></Link>
                                </CardFooter>
                            </Card>
                        </div>
                      ))}
                </div>
            </section>
        </Transition>
    )
}

export default ProjectPage