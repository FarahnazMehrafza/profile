//* Create a component named LinkButtons.tsx in the components folder.
//*This component should render three buttons, each enclosed in an <a> tag for LinkedIn, GitHub, and a resume.
//* Hardcode the URLs for each button.
//*Make sure each <a> tag includes the target="_blank" attribute to ensure links open in a new window or tab.
//*Style the buttons using an external CSS file named LinkButtons.css.

// LinkButtons.tsx

import './LinkButtons.css';

const LinkButtons: React.FC = () => {
  return (
    <div className="frame">
        <a href="www.linkedin.com/in/farahnazmehrafza" target="_blank" >
           <button  className="li-button">LinkedIn</button>
        </a>
      <a href="https://github.com/FarahnazMehrafza" target="_blank" >
        <button className="git-button">GitHub</button>
      </a>
      <a href="https://farahnazmehrafza-portfolio.netlify.app/Farahnaz_Mehrafza_resume%20.pdf" target="_blank" >
        <button className="resu-button">Resume</button>
      </a>
    </div>
  );
};

export default LinkButtons;
