import { useState } from 'react';
import './Form.css';

const ContactForm = () => {
    // State variables for name, email, and message
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
   
    //Create a handle submit function which basically console.log the states as one line prevent the default behavior from happening
    // pass events as a parameter which takes the type React.FormEvent<HTMLFormElement>
     
    // Step 2: Implement onChange handlers for each form element
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage(event.target.value);
  };

  // Step 3: Implement the form submission logic
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
   // Step 4: Simulate form data processing
    const formData = {
      name: name,
      email: email,
      message: message,
    };
    console.log('Form Data:', formData);

    // Step 5: Additional actions like sending data to a server or updating state can be performed here
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Step 6: Bind values to states and attach onChange handlers for each form element */}
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        Message:
        <textarea value={message} onChange={handleMessageChange} />
      </label>
      <br />
      {/* Conditional rendering for the submit button */}

      <button type="submit" disabled={message.length<=10} >
        Submit
        </button>
    </form>
  );
};

export default ContactForm;