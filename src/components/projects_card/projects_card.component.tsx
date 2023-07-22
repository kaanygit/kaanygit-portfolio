import {FiGithub} from 'react-icons/fi';
import {SiTypescript, SiWebflow} from 'react-icons/si';
import { FC, Fragment } from 'react';
import { SiTailwindcss,SiFirebase,SiMongodb } from 'react-icons/si';
import { FaReact,FaNodeJs } from 'react-icons/fa';
import {  Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';


export interface ProjectsTS{
    id: number;
    name: string;
    imageUrl: string;
    lang: string;
    website: string;
    githubLink: string;
}


const ProjectsCard:FC<{project:ProjectsTS}>=({project})=>{
    const {name,imageUrl,lang,website,githubLink,id}=project;

    return  (        
        <Fragment>
            <div className='projects-card-container w-full h-full flex flex-col h-96 items-center '>
                <Card key={id} className="mt-20 w-96 dark:bg-dark-color-2 shadow-deneme bg-gray-200 shadow-deneme transition-all duration-500 ease">
                    <CardHeader color="blue-gray" className="relative h-56">
                        <img src={imageUrl} alt={name}/>
                    </CardHeader>
                    <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2 dark:text-text-color-4">
                        {name}
                    </Typography>
                    <Typography className="dark:text-text-color-4">
                        Hello, this is the details part of the application, I will fill in here very soon 😉
                        <span className='icons-spans flex text-3xl pt-3'>
                            {lang.includes('javasciprt') && <SiTailwindcss className='text-javasciprt-color m-2'/>}
                            {lang.includes('typescript') && <SiTypescript className='text-typescript-color m-2'/>}
                            {lang.includes('react')  && <FaReact className="text-react-color m-2" />}
                            {lang.includes('tailwind') && <SiTailwindcss className='text-tailwind-color m-2'/>}
                            {lang.includes('firebase') && <SiFirebase className='text-firebase-color m-2'/>}
                            {lang.includes('mongodb') && <SiMongodb className=' text-mongodb-color m-2'/>}
                            {lang.includes('nodejs') && <FaNodeJs className='text-nodejs-color m-2'/>}
                        </span>
                    </Typography>
                    </CardBody>
                    <CardFooter className="justify-evenly flex text-3xl">
                        <div ><Link to={`${website}`}><span className='text-blue-700'><SiWebflow /></span></Link></div>
                        <div><Link to={`${githubLink}`}><span className='text-black dark:text-text-color-4'><FiGithub/></span></Link></div>
                    </CardFooter>
                </Card>
            </div>
        </Fragment>

    )
};

export default ProjectsCard;