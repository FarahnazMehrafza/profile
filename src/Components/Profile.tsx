//* profile picture
//*  two describing your professional background, skills, or interests. a short biography text.
import './Profile.css';
import './Contact.css';
import ProfilePhoto from "../assets/farah.png"
import CoverPhoto from "../assets/cover.png"

const Profile = () =>
{
return ( 
<div className='body'>
  <div className="CoverPhoto">
         <img src={CoverPhoto} alt='cover Pic' />
  </div>
  <div className='main'>
     <div className="profile_photo">
         <img src={ProfilePhoto} alt='Profile Pic' />

     </div>
     <div className="heading"> <p>Farahnaz Mehrafza </p>
      <p>Front-end Developer JS React </p>
      
      <p></p>
      </div>
      
        <div className="p1">
        <p className='heading-p' > Who Am I ? </p>
          A passionate Full Stack Developer who is a tech lover and love to make an idea into real. 
        Leveraging expertise in Frontend Software Development participated in product development 
        for Banking and health Applications. 
       <div> <p className='heading-p' > How to contact me? </p> </div>
    </div>
   
    

    </div>
</div>
  );
};

export default Profile;