//* Create a component named LinkButtons.tsx in the components folder.
//*This component should render three buttons, each enclosed in an <a> tag for LinkedIn, GitHub, and a resume.
//* Hardcode the URLs for each button.
//*Make sure each <a> tag includes the target="_blank" attribute to ensure links open in a new window or tab.
//*Style the buttons using an external CSS file named LinkButtons.css.

// LinkButtons.tsx

import React from 'react';
import './LinkButtons.css';

interface LinkbuttonProps {
  label: string;
  href:string;
};

const LinkButtons :React.FC<LinkbuttonProps> = ({ label, href }) => {
  return (
   <div className="frame">
        <a href={href} target="_blank" >
           <button>{label}</button>
        </a>
     
    </div>
  );
};

export default LinkButtons;
