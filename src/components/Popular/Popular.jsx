import React from 'react';
import Popular_css from './Popular.css';
import Popular_img from './assets/popular.jpg'; // Импортируйте изображение

const ImageGrid = () => {
  // Массив с текстами для каждого элемента
  const textArray = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];

  // Изображение, которое будет использоваться для всех элементов
  // Теперь используем переменную Popular_img

  return (
    <div className="image-grid">
      {textArray.map((text, index) => (
        <div className="image-grid-item" key={index}>
          <img src={Popular_img} alt={`Image ${index + 1}`} />
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
