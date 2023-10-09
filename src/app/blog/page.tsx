"use client"

import { Transition } from "@headlessui/react";
import { Avatar, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";




const BlogPage:React.FC=()=>{
    const [showPageTransition,setShowPageTransition]=useState<boolean>(false);
    useEffect(()=>{
        setShowPageTransition(true);
        },[])
    return(
        <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
            <section className="mx-auto dark:bg-dark-color-2 flex min-h-full w-full flex-col  px-24 pt-20 pb-16 transform duration-300 ease-in-out">
                <div className="flex justify-center items-center w-full text-center text-background-color-2 dark:text-background-color-1 text-5xl font-bold mb-10"><span>BLOG</span></div>
                <div className="flex justify-center text-center items-center grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6  ">
                
                    {Array.from({length:4}).map((_,index:number)=>(
                    <div className="flex justify-center items-center text-center w-full h-full" key={index}>
                        <Card shadow={false} className="relative flex grid 2xl:h-[20rem] xl:h-[20rem] lg:h-[20rem] md:h-[20rem] sm:h-[25rem] w-[20rem] max-w-[28rem] items-center justify-center overflow-hidden text-center">
                            <CardHeader floated={false} shadow={false} color="transparent" className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://e1.pxfuel.com/desktop-wallpaper/588/103/desktop-wallpaper-best-4-software-developer-backgrounds-on-hip-software-engineer.jpg')] bg-cover bg-center">
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                            </CardHeader>
                            <CardBody className="relative py-6 px-3 md:px-6">
                                <Typography variant="h3" color="white" className="mb-4 font-medium leading-[1.5]">
                                    How we design and code open-source projects?
                                </Typography>
                                <Typography variant="h6" className="mb-2 text-gray-400">
                                    Yasin Kaan Yiğit
                                </Typography>
                                <Avatar size="lg" variant="circular" alt="tania andrew" className="border-2 border-white" src="https://avatars.githubusercontent.com/u/90357518?v=4" />
                            </CardBody>
                        </Card>
                    </div>
                    ))}


                </div>
            </section>
        </Transition>
    )
}

export default BlogPage