import React, { useState } from 'react';
import styles from './carousel.module.css';

// tar in array, tom som default
const Carousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // aktuell bildindex, 0 som default
  console.log(images);

  const nextSlide = () => {
    if (images.length > 0) { // om det finns bilder
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }
  };

  const prevSlide = () => {
    if (images.length > 0) { 
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      ); // om index är 0, sätt till sista bilden, annars -1
    }
  };

  if (images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.button}>⬅</button>
      <img 
        src={images[currentIndex]}
        alt="img"
        className={styles.image} 
      />
      <button onClick={nextSlide} className={styles.button}>➡</button>
    </div>
  );
};

export default Carousel;
