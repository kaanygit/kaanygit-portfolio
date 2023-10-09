"use client"
import { Transition } from "@headlessui/react"
import { useEffect, useState } from "react";


interface ParamsProps{
    params:{
        "id&":string;
    }
};

const BlogPostPage:React.FC<ParamsProps>=({params})=>{
    const paramsValues:string|null=params['id&']?params['id&'].substring(5):null
    const [showPageTransition,setShowPageTransition]=useState<boolean>(false);
    const [postHaveDB,setPostHaveDB]=useState<boolean>(false);
    console.log(paramsValues);

    useEffect(()=>{
        setShowPageTransition(true);
        },[])
    return(
        <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
                {postHaveDB?(
                    <section className="mx-auto dark:bg-dark-color-2 flex min-h-full w-full flex-col items-center justify-center px-24 pt-20 pb-16 transform duration-300 ease-in-out">
                        Blog Post Page {paramsValues}
                    </section>
                ):(
                    <section className="mx-auto dark:bg-dark-color-2 flex min-h-screen w-full flex-col items-center justify-center text-center px-24 pt-20 pb-16 transform duration-300 ease-in-out text-6xl text-background-color-2 dark:text-background-color-1 font-bold">
                        Not Found This Post 😞
                    </section>
                )}
        </Transition>
    )
}

export default BlogPostPage