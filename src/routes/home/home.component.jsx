import Directory from '../../components/directory/directory.component';
import {Outlet} from 'react-router';
import './home.style.css';

const Home =()=>{
    return (
        <div className='home-page-div'>
            <Directory/> 
            <Outlet/>
        </div>
    );
};


export default Home;
