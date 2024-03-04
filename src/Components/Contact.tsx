
import './Contact.css';
const Contact = ()=> {
    return (
        <div className="contact-container">
          <hr/>
          <p className="heading" > Contact Me</p>

          <hr/>
          <form>
            <label htmlFor="name"> Name: </label>
            <input type="text" id="name" placeholder="Enter your Name" color=" red" />
          
            <label htmlFor="your Email"> Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your Email" />

            <label htmlFor="message"> Message </label>
            <textarea id="message" name="message" placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
          
          
        </div>
    );
};

export default Contact;
