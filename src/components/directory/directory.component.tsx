import { Link } from 'react-router-dom';
import { FC, Fragment} from 'react';
import myImage from '../../assets/myImageBackgroundNone.png'
import backgroundImage from '../../assets/backgrondPaintSplaterr.png'


const Directory:FC=()=>{

    return(
        <Fragment>
            <section className='home justify-center items-center p-16 h-full  border-box  mx-auto w-full max-w-screen md:text-base sm:text-xs dark:bg-dark-color-1 transition-all duration-500 ease'>
                 <div className='w-full h-full justify-center flex items-center text-center'>
                    <div className='w-full h-full'>
                        <div className=' items-center justify-center flex text-center flex w-full h-full grid grid-cols-2 '>
                            <div className='flex p-5 w-full h-full '>
                                <div className='h-full w-full  grid grid-cols-1 flex justify-center items-center text-center'>
                                    <div className='w-full h-full text-center flex'>
                                    </div>
                                    <div className=' w-full h-full'>
                                        <div className='flex '>
                                            <span className='justify-start text-lg font-medium text-text-color-3 tracking-wider text-center justify-center items-center flex'>Hello 👋</span>
                                        </div>
                                        <div className='text-7xl w-full h-full flex'>
                                            <span className='justify-start  dark:text-text-color-2 mr-5 text-center justify-center items-center flex'>I'm</span><span className='justify-start flex  text-text-color-1 tracking-wide text-center justify-center items-center '>Yasin Kaan Yigit</span>
                                        </div>
                                    </div> 
                                    <div className='w-full h-full'>
                                        <span className='justify-start flex text-lg'>Hi, I'm Yasin. I'm full stack developer and this is my portfolio</span>
                                        <div className='flex mt-4'>
                                            <button className='bg-gray-500 px-8 py-2 text-text-color-2 font-medium bg-dark-color-1 justify-start flex mr-10 rounded-xl dark:bg-text-color-3 transform hover:scale-110 transition-all duration-500 ease'>CV</button>
                                            <Link to='contact'><button className='bg-gray-500 px-2 py-2 text-text-color-2 font-medium bg-dark-color-1 justify-start flex rounded-xl dark:bg-text-color-3 transform hover:scale-110 transition-all duration-500 ease'>Contact Me</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='justify-center items-center flex relative'>
                                <div className='p-5 justify-center h-full w-full items-center flex z-10'>
                                    <img src={myImage} className='rounded-3xl ' alt='myImage'/>
                                </div>
                                <div className='z-0 absolute items-center bottom-0 justify-center'>
                                    <img src={backgroundImage} className='h-full' alt='backgroundImage'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </Fragment>
    );
}
export default Directory;
