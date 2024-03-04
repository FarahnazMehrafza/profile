import { useState } from 'react';


const ContactForm = () => {
    // State variables for name, email, and message
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
   
    //Create a handle submit function which basically console.log the states as one line prevent the default behavior from happening
    // pass events as a parameter which takes the type React.FormEvent<HTMLFormElement>
     
    return (
        <div>
            <form action="">
                {/* update each state everytime the user enters a keystroke (onChange)*/}
               <input type="text" value={name} placeholder='Name'
                //   onChange={setName(/*Event Target Value*/)}
                />

                 <input type="email" value={email} placeholder="Email" />
                 <textarea value={message} placeholder="message..."></textarea>
        {/* 1. Submitting the form (console log the values from the state*/}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;