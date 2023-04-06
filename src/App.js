import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import Projects from './routes/projects/projects.component.jsx';
import Contact from './routes/contact/contact.component.jsx';
import About from './routes/about/about.component.jsx';

import {Routes,Route} from 'react-router-dom';

const App=()=>{
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