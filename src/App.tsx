/*import Profile from "./Components/Profile"; */
import LinkButtons from "./Components/LinkButtons";
import ContactForm from "./Components/Form"
import ProfileHeading, { ProfileText, CoverPhoto, ProfilePhoto } from './Components/Profile.tsx';


const App = () => {
  return ( 
    <div className="main">
         <CoverPhoto url="../src/assets/cover.png" />
         <ProfilePhoto url="..//src/assets/farah.png"/>
         <ProfileHeading Titr=" Farahnaz Mehrafza " />
         <ProfileHeading Titr=" Frontend Developer JS Reac" />

         <ProfileText bioText="A passionate Full Stack Developer who is a tech lover and love to make an idea into real. Leveraging expertise in Frontend Software Development participated in product development for Banking and health Applications."  />
        <ProfileHeading Titr="Who Am I ?"/>

         <LinkButtons label="My Resume"href="https://farahnazmehrafza-portfolio.netlify.app/Farahnaz_Mehrafza_resume%20.pdf" /> 
         <LinkButtons label="My GitHub" href="https://github.com/FarahnazMehrafza" /> 
         <LinkButtons label="My LinkedIn" href="www.linkedin.com/in/farahnazmehrafza" /> 
         <ProfileHeading Titr="Wanna Contact Me?"/>
         {/* Profile title ="Want to know me more?" />  */}
         <ContactForm/> 
    </div>
  );
};

export default App;