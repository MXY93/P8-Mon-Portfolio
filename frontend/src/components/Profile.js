import React from 'react';
import profilePic from '../assets/profile-pic.png';
import profile3DPic from '../assets/profile-3D.webp';
import '../styles/presentation.scss';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-flip">
        <img src={profilePic} alt="Profile" className="profile-pic front" />
        <img src={profile3DPic} alt="AI generated profile" className="profile-pic back" />
      </div>
    </div>
  );
};

export default Profile;
