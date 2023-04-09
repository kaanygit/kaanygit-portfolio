import {Outlet} from 'react-router';
import {AboutPage,AboutHeading,AboutDescription} from './about.style.jsx';
const About=()=>{
    return(
        <AboutPage> 
            <AboutHeading>I'm Yasin Kaan</AboutHeading>
            <hr/>
            <AboutDescription>
            As a mathematics student at Ege University, I have always had a passion for problem-solving and critical thinking. Recently, I have become interested in the world of software development and have been working hard to develop my skills in this field.
            </AboutDescription>
            <AboutDescription>
            I have experience and knowledge in various programming languages, including Python, C# and JavaScript, and I am engaged in both front-end and back-end development.
            </AboutDescription>
            <AboutDescription>
            I enjoy tackling complex problems and finding creative solutions, and I believe my background in mathematics has given me a strong foundation for logical thinking and analytical reasoning
            </AboutDescription>
            <AboutDescription>
            I am excited to continue exploring the world of software development and am always looking for new opportunities to grow and develop my skills.
            </AboutDescription>
            <Outlet/>
        </AboutPage>
    )
}
export default About;