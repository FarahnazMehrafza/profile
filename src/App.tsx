import Profile from "./Components/Profile";
import LinkButtons from "./Components/LinkButtons";
import ContactForm from "./Components/Form"
import Greeting from "./Components/Greeting";

const App =() => {
  const handleClick = () => {
    console.log("Clicked on Button");
  };

  return ( 
    <div className="main">
      <div className="LinkButtons"> 
         <LinkButtons/> 
      </div>
         <Profile/>
         <ContactForm/>
      
    </div>

  );
};

export default App;