import Profile from "./Components/Profile";
import LinkButtons from "./Components/LinkButtons";
import ContactForm from "./Components/Form"


const App =() => {
 

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