import React from 'react';
// Tell this JS file to use this image
import avatarDummy from './slappy_the_dummy.png';
import './avatarDummy.css';

const AvatarDummyIMG = () => {
  // Import result is the URL of your image
  return <img src={avatarDummy} alt="Avatar Dummy" id="avatarDummyIMG" />;
}

export default AvatarDummyIMG;