//* profile picture
//*  two describing your professional background, skills, or interests. a short biography text.
import './Profile.css';
import './Contact.css';

const Profile = () =>
{
return ( 
<div className='body'>
   <div className='cover'> </div>
   <div className='main'>
     <div className="profile_photo">
         <img src="img/farahnaz.png" alt='Profile Pic' />

     </div>
     
     <div className="heading"> <p>Faranaz Mehrafza </p>
     
      <p>Front-end Developer JS React </p>
      
      <p></p>
      </div>
      
        <div className="p1">
        <p></p>

         A passionate Full Stack Developer who is a tech lover and love to make an idea into real. 
        Leveraging expertise in Frontend Software Development participated in product development 
        for Banking and health Applications.  
    </div>
    </div>
</div>
  );
};

export default Profile;