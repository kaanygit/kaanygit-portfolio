import { FC } from 'react';
import Directory from '../../components/directory/directory.component';
import {Outlet} from 'react-router';
import HomeProjectsComponent from '../../components/home-projects/home-projects.component';
import HomeSkilsComponent from '../../components/home-skils/home-skills.component';
import FooterComponent from '../../components/footer/footer.component';

const Home:FC =()=>{
    return (
        <div className='home-page-div'>
            <Directory/> 
            <HomeProjectsComponent/>
            <HomeSkilsComponent/>
            <FooterComponent/>
            <Outlet/>
        </div>
    );
};


export default Home;
