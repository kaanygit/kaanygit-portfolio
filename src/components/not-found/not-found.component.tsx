"use client"

import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";



const NotFoundComponent:React.FC=()=>{
    const [showPageTransition,setShowPageTransition]=useState<boolean>(false);

    useEffect(()=>{
        setShowPageTransition(true);
    },[])
    return(
        <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
            <section className="flex justify-center items-center w-full h-screen text-center">
                Not found this page 😞
            </section>
        </Transition>
    )
}


export default NotFoundComponent;