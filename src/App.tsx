import Profile from "./Components/Profile";
import Contact from "./Components/Contact";
import LinkButtons from "./Components/LinkButtons";

const App =() => {
  return (
    <div className="main">
      <Profile/>
      
      <LinkButtons/>

      <Contact/>

    </div>
  );
};

export default App;