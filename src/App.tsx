import Profile from "./Components/Profile";
import LinkButtons from "./Components/LinkButtons";
import ContactForm from "./Components/Form"




const App = () => {
  return ( 
    <div className="main">
         <Profile />
         <LinkButtons label="My Resume"href="https://farahnazmehrafza-portfolio.netlify.app/Farahnaz_Mehrafza_resume%20.pdf" /> 
         <LinkButtons label="My GitHub" href="https://github.com/FarahnazMehrafza" /> 
         <LinkButtons label="My LinkedIn" href="www.linkedin.com/in/farahnazmehrafza"  /> 
         {/* Profile title ="Want to know me more?" />  */}
         <ContactForm/> 
    </div>
  );
};

export default App;