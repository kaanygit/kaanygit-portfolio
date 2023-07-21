import {Routes,Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Projects from './routes/projects/projects.component';
import Contact from './routes/contact/contact.component';
import About from './routes/about/about.component';
import ProjectsApi from './redux/projects/projects.api'

import 'tailwindcss/tailwind.css';


const App=()=>{
  ProjectsApi();
  return(
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="projects" element={<Projects/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="about" element={<About/>}/>
      </Route>
    </Routes>
  );
}

export default App;