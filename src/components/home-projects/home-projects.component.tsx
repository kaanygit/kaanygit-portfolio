import { FC, } from "react";
import { useSelector } from "react-redux";
import { getProjects } from "../../redux/projects/projects.selector";
import { Card,Typography} from "@material-tailwind/react";
import { CardBody, CardFooter, CardHeader } from "@material-tailwind/react/components/Card";
import { Link } from "react-router-dom";
import {TbDots} from 'react-icons/tb'
import { SiWebflow } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

const HomeProjectsComponent:FC=()=>{
    const displayedProjects:number = 5;
    const projects=useSelector(getProjects);
    return(
        <div className="w-full h-full justify-center items-center text-center dark:bg-dark-color-1 transition-all duration-500 ease p-16">
            <div className="w-full h-full">
                <div className="w-full justify-center items-center text-center h-full">
                    <div className="w-full h-full  justify-start text-6xl tracking-widest  ">
                        <div className="justify-start flex dark:text-text-color-2">Projects</div>
                        {/* <div className="border-b-4 border-black flex justify-start w-64 pt-3 dark:border-white"></div> */}
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-5 flex w-full h-full">
                        {projects.slice(0,displayedProjects).map((project)=>( 
                            <div key={project.id} className="justify-center items-center text-center flex w-full ">
                                <Card  className="mt-20 w-96 dark:bg-dark-color-2 shadow-deneme bg-gray-200">
                                    <CardHeader color="blue-gray" className="relative h-56">
                                        <img src={project.imageUrl}  alt={project.name}/>
                                    </CardHeader>
                                    <CardBody>
                                        <Typography variant="h5" color="blue-gray" className="mb-2 dark:text-text-color-4">
                                            {project.name}
                                        </Typography>
                                        <Typography className="dark:text-text-color-4">
                                            Hello, this is the details part of the application, I will fill in here very soon 😉
                                        </Typography>
                                    </CardBody>
                                    <CardFooter className="justify-evenly text-3xl flex w-full h-full">
                                        <div ><Link to={`${project.website}`}><span className='text-blue-700'><SiWebflow/></span></Link></div>
                                        <div><Link to={`${project.githubLink}`}><span className='text-black dark:text-text-color-4'><FiGithub/></span></Link></div>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))}
                        {projects.length>displayedProjects&&(
                            <div className="text-center w-full h-full justify-center items-center flex text-4xl dark:text-text-color-4">
                              <Link to='/projects' className="text-5xl text-center flex h-full justify-center items-center"><TbDots/></Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeProjectsComponent