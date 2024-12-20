import React from 'react';
import PasswordStrengthMeter from './components/passwordStrMeter/passwordStrMeter';
import Carousel from './components/carousel/carousel';
import { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
    console.log('Password in App.js:', newPassword); 
  };

  const sampleImages = [
    '/imgs/1.png',
    '/imgs/2.jpeg',
    '/imgs/3.png',
    '/imgs/4.png',
  ];

  return (
    <div className="App">
      <h1>Mini-SDK</h1>
      
      <h2>Password Strength Meter</h2>
      <PasswordStrengthMeter onPasswordChange={handlePasswordChange}  />
      
      <h2>Image Carousel</h2>
      <Carousel images={sampleImages} />
    </div>
  );
}

export default App;
