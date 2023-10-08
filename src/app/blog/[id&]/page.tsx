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
    console.log(paramsValues);

    useEffect(()=>{
        setShowPageTransition(true);
        },[])
    return(
        <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
            <section className="mx-auto flex min-h-full w-full flex-col items-center justify-center px-24 pt-20 pb-16 transform duration-300 ease-in-out">
                Blog Post Page {paramsValues}
            </section>
        </Transition>
    )
}

export default BlogPostPage