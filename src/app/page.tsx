"use client"
import Image from 'next/image'
import IamSun from '../assets/iam.png'
import IamDark from '../assets/iamdark.png'
import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
import { AiFillHtml5 } from 'react-icons/ai'
import {DiCss3Full, DiPython} from 'react-icons/di'
import {FaPhp,FaReact} from 'react-icons/fa'
import {SiRedux,SiCsharp, SiTailwindcss, SiFirebase, SiMongodb, SiNextdotjs} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import { getProjectsData } from '@/redux/features/projects/fetch-projects-data'
import { useAppSelector } from '@/redux/hooks'
import { Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from '@material-tailwind/react'
import { BiLogoNodejs, BiLogoRedux, BiLogoTypescript } from 'react-icons/bi'
import Link from 'next/link'
import { TbBrandWebflow, TbDots } from 'react-icons/tb'
import { FiGithub } from 'react-icons/fi'
import { useRouter } from 'next/navigation'

export default function Home() {
  getProjectsData();
  const router=useRouter();
  const [showPageTransition,setShowPageTransition]=useState<boolean>(false);
  const projectData=useAppSelector(state=>state.projectReducer.project);
  const displayProject:number=5;
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
  const handleHireMe=()=>{
    router.push("/contact");
  }

  useEffect(()=>{
    setShowPageTransition(true);
  },[])


  return (
    <Transition className="dark:bg-dark-color-2 transform duration-300 ease-in-out" show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
      <main className="mx-auto flex min-h-full flex-col items-center justify-center p-24 transform duration-300 ease-in-out">
        <div className='flex justify-center items-center text-center w-full  z-10'>
          <span className='flex justify-center items-center text-center text-background-color-2 text-5xl font-bold dark:text-background-color-1'>Yasin Kaan Yigit</span>
        </div>

        <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col w-full h-full pt-10 flex-wrap'>
          <div className='flex basis-1/4 '>
            <div className="flex flex-1 flex-col py-6 2xl:px-16 xl:px-16 lg:px-8 md:px-4 sm:px-0 overflow-hidden w-full break-all">
              <span className='text-2xl  font-bold  justify-start flex 2xl:border-b-4 xl:border-b-4 lg:border-b-2 md:border-b-2 sm:border-b  dark:text-background-color-1'>Services </span>
              <div className='flex flex-col justify-start  py-2'>
                <span className='text-lg  font-bold text-background-color-2 flex justify-start dark:text-background-color-1'>Front-end Development</span>
                <span className='text-md text-background-color-3 flex justify-start pt-1'>front ent development ile uğraşıyorum buda açıklamsssssa</span>
              </div>
              <div className='flex flex-col justify-start py-2'>
                <span className='text-lg font-bold text-background-color-2 flex justify-start dark:text-background-color-1'>Back-end Development</span>
                <span className='text-md text-background-color-3 flex justify-start pt-1'>front ent development ile uğraşıyorum buda açıklamsssssa</span>
              </div>
              <div className='flex flex-col justify-start py-2'>
                <span className='text-lg font-bold text-background-color-2 flex justify-start dark:text-background-color-1'>Data Science</span>
                <span className='text-md text-background-color-3 flex justify-start pt-1'>front ent development ile uğraşıyorum buda açıklamsssssa</span>
              </div>
            </div>
          </div>
          <div className='flex basis-1/2 dark:hidden  block justify-center items-center'>
            <Image src={IamSun} alt="i/'am-photos" className=" w-full h-full  z-0 rounded-b-2xl" />
          </div>
          <div className='flex basis-1/2 dark:block hidden justify-center items-center'>
            <Image src={IamDark} alt="i/'am-photos" className=" w-full h-full  z-0 rounded-b-2xl" />
          </div>
          <div className='flex basis-1/4 '>
            <div className="flex flex-1 flex-col  py-6 2xl:px-16 xl:px-16 lg:px-8 md:px-4  overflow-hidden break-all ">
              <span className='text-2xl font-bold flex justify-start 2xl:border-b-4 xl:border-b-4 lg:border-b-2 md:border-b-2 sm:border-b  dark:text-background-color-1'>Full Stack Developer from Turkey</span>
              <div className='text-md text-background-color-3  overflow-hidden py-4'>asşkfmlöasmgnlkşasssssssssssssssssssssssssssssmlxsaöligömlşasmgölasgmşlasgasmglasmgliasmgli burdaki yazı sağa doğru gidiyor s</div>
              <button  className='p-2 bg-background-color-2 dark:bg-background-color-1 dark:text-background-color-2 text-background-color-3 hover:bg-gray-900  transform duration-300 ease-in-out' onClick={handleHireMe}>Hire Me</button>
              <div className='flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col w-full justify-evenly items-center pt-5 text-md '>
                <div className='flex flex-col justify-center items-center text-center'>
                  <span className='text-background-color-2 font-bold dark:text-background-color-1'>2 Years</span>
                  <span className='text-background-color-3 text-sm dark:text-linkedin-color'>Experience</span>
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                  <span className='text-background-color-2 font-bold dark:text-background-color-1'>20+</span>
                  <span className='text-background-color-3 text-sm dark:text-linkedin-color'>Projects</span>
                </div>
                <div className='flex flex-col justify-center items-center text-center'>
                  <span className='text-background-color-2 font-bold dark:text-background-color-1'>20+</span>
                  <span className='text-background-color-3 text-sm dark:text-linkedin-color'>Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>      



      </main>
      <section className='mx-auto flex min-h-full flex-col items-center justify-center 2xl:p-24 xl:p-24 lg:p-24 md:px-24 sm:px-24 md:py-16 sm:py-10 '>
          <span className='text-5xl justify-center font-bold text-background-color-2 dark:text-background-color-1 mb-8'>Projects</span>
          <div className='flex grid 2xl:grid-cols-3 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 w-full'>
            {projectData.slice(0,displayProject).map((project:any,index:number)=>(
            <div className="flex justify-center items-center text-center w-full h-full" key={index}>
              <Card className="mt-6 w-96 dark:bg-gray-200 ">
                <CardHeader color="blue-gray" className="relative 2xl:h-56 xl:h-56 lg:h-56 md:h-40 sm:h-28">
                    <img
                        src={project.imageUrl}
                        alt="card-image"
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2 dark:text-black">
                        {project.name}
                    </Typography>
                    <Typography className='dark:text-black'>
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
                    <Link href={project.githubLink} className='pr-2 text-black '><FiGithub/></Link>
                    <Link href={project.website} className='pl-2 text-blue-500 '><TbBrandWebflow/></Link>
                </CardFooter>
              </Card>
            </div>
            ))} 
            {projectData.length>displayProject&&(
              <div className="text-center w-full h-full justify-center items-center flex text-4xl dark:text-text-color-4">
                <Link href='/project' className="text-5xl text-center flex h-full justify-center items-center"><TbDots/></Link>
              </div>
              )}
          </div>
          <div className='flex flex-col justify-center items-center w-full mt-12'>
            <span className='border-b-4 text-4xl font-bold dark:text-background-color-1'>Languages and Technologies</span>
            <div className='flex grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-10  w-full pt-5  text-4xl'>
              <span className='text-html5-color p-3 transform ease-in-out duration-500  hover:scale-110 flex justify-center '><AiFillHtml5/></span>
              <span className='text-css3-color p-3 transform ease-in-out duration-500 hover:scale-110 flex justify-center'><DiCss3Full/></span>
              <span className='text-javascript-color p-3 transform ease-in-out duration-500 hover:scale-110 flex justify-center'><IoLogoJavascript/></span>
              <span className='text-react-color p-3 transform ease-in-out duration-500 hover:scale-110 flex justify-center'><FaReact/></span>
              <span className='text-redux-color p-3 transform ease-in-out duration-500 hover:scale-110 flex justify-center'><SiRedux/></span>
              <span className='text-php-color p-3 transform ease-in-out duration-500 hover:scale-110 flex justify-center'><FaPhp/></span>
              <span className='text-python-color p-3 transform ease-in-out duration-500 hover:scale-110 flex justify-center'><DiPython/></span>
              <span className='text-purple-500 p-3 transform ease-in-out duration-500 hover:scale-110 flex justify-center'><SiCsharp/></span>
            </div>
          </div>
      </section>
    </Transition>
  )
}
