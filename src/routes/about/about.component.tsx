import { FC } from 'react';
import {Outlet} from 'react-router';
const About:FC=()=>{
    return(
        <>
            <div className='about-page justify-center text-center items-center p-16 h-screen mx-0 my-auto transition-all duration-500 ease dark:bg-dark-color-1 dark:text-text-color-4 dark:shadow-deneme'>
                <h1 className='about-heading font-bold text-5xl mb-3'>I'm Yasin Kaan Yigit</h1>
                <hr className='mb-5'/>
                <p className='mb-5 text-xl leading-6'>As a mathematics student at Ege University, I have always had a passion for problem-solving and critical thinking. Recently, I have become interested in the world of software development and have been working hard to develop my skills in this field.</p>
                <p className='mb-5 text-xl leading-6'>I have experience and knowledge in various programming languages, including Python, C# and JavaScript, and I am engaged in both front-end and back-end development.</p>
                <p className='mb-5 text-xl leading-6'>I enjoy tackling complex problems and finding creative solutions, and I believe my background in mathematics has given me a strong foundation for logical thinking and analytical reasoning</p>
                <p className='mb-5 text-xl leading-6'>I am excited to continue exploring the world of software development and am always looking for new opportunities to grow and develop my skills.</p>
                <Outlet/>
            </div>
        </>
    )
}
export default About;