"use client"

import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";




const AboutPage:React.FC=()=>{
    const [showPageTransition,setShowPageTransition]=useState<boolean>(false);

    useEffect(()=>{
        setShowPageTransition(true);
      },[])
    return(
        <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
            <section className="mx-auto flex min-h-full w-full flex-col items-center justify-center p-24 transform duration-300 ease-in-out">
                <h1 className="text-5xl font-bold flex justify-center">I'am Yasin Kaan Yiğit</h1>
                <div className="flex flex-col text-xl mt-5">
                    <h2>
                        As a mathematics student at Ege University, I have always had a passion for problem-solving and critical thinking. Recently, I have become interested in the world of software development and have been working hard to develop my skills in this field.
                    </h2>
                    <h2 className="pt-5">
                    I have experience and knowledge in various programming languages, including Python, C# and JavaScript, and I am engaged in both front-end and back-end development.
                    </h2>
                    <h2 className="pt-5">
                    I enjoy tackling complex problems and finding creative solutions, and I believe my background in mathematics has given me a strong foundation for logical thinking and analytical reasoning
                    </h2>
                    <h2 className="pt-5">
                    I am excited to continue exploring the world of software development and am always looking for new opportunities to grow and develop my skills.
                    </h2>
                </div>
            </section>
        </Transition>
    )
}

export default AboutPage