import { FC } from "react";
import { Link } from "react-router-dom";

interface NavigationCartActiveMenuTS{
    setActive:React.Dispatch<React.SetStateAction<boolean>>
    isActive:boolean;
}

const NavigationCart:FC<NavigationCartActiveMenuTS>=({isActive,setActive})=>{
    const handleToggle = ():any  => {
        setActive(!isActive);
      };
    return(
        <ul className={`menubarUlToogle absolute top-full right-0 shadow bg-gray-500 p-5 rounded-xl transition-all duration-300 ease-in-out z-10 ${!isActive?'opacity-100':'opacity-0 invisible'}`}>
            <li onClick={handleToggle} className='block hover:text-gray-300 font-medium text-xl'><Link to='/'>Home</Link></li>
            <li onClick={handleToggle} className='block hover:text-gray-300 font-medium text-xl'><Link to='/projects'>Projects</Link></li>
            <li onClick={handleToggle}className='block hover:text-gray-300 font-medium text-xl'><Link to='/contact'>Contact</Link></li>
            <li onClick={handleToggle}  className='block hover:text-gray-300 font-medium text-xl'><Link to='/about'>About</Link></li>
        </ul> 
    )
}

export default NavigationCart;