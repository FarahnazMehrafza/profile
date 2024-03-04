import Profile from "./Components/Profile";
import Contact from "./Components/Contact";
import LinkButtons from "./Components/LinkButtons";
import ContactForm from "./Components/Form"

const App =() => {
  return (
    <div className="main">
      <Profile/>
      
      <LinkButtons/>

      <Contact/>
      <ContactForm/>

    </div>
  );
};

export default App;