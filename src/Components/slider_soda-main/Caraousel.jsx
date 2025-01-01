import React, { useEffect, useState } from 'react';
import './style.css';

const Carousel = () => {
  const [active, setActive] = useState(0);
  const [zIndex, setZIndex] = useState(2);
  const [direction, setDirection] = useState('next'); // Track animation direction
  const items = [
    {
      imgSrc: 'project/ayadesign.png',
      bgColor: '#14B8A6',
      title: 'GasCari',
      description: 'Orange-flavored Soda',
      category: 'Fruit Soda',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id, voluptatem error aspernatur incidunt quas sit, dolores voluptates delectus odit quo, repudiandae nam sint eligendi aliquid corrupti architecto earum. Reprehenderit nobis nihil excepturi eius, quas distinctio saepe aspernatur voluptatum quam veritatis accusantium dolorem non fuga corrupti, quia possimus minus? Amet!'
    },
    {
      imgSrc: 'project/gascariProject.png',
      bgColor: '#fdba74',
      title: 'Apple',
      description: 'Apple-flavored Soda',
      category: 'Fruit Soda',
      details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id, voluptatem error aspernatur incidunt quas sit, dolores voluptates delectus odit quo, repudiandae nam sint eligendi aliquid corrupti architecto earum. Reprehenderit nobis nihil excepturi eius, quas distinctio saepe aspernatur voluptatum quam veritatis accusantium dolorem non fuga corrupti, quia possimus minus? Amet!'
    }
  ];

  const handleNext = () => {
    setDirection('next');
    setActive((prev) => (prev + 1) % items.length);
    setZIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setDirection('prev');
    setActive((prev) => (prev - 1 + items.length) % items.length);
    setZIndex((prev) => prev + 1);
  };

  const handleDotClick = (index) => {
    if (index !== active) {
      setDirection(index > active ? 'next' : 'prev');
      setActive(index);
      setZIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const autoRun = setTimeout(() => {
      handleNext();
    }, 5000);

    return () => clearTimeout(autoRun);
  }, [active]);

  useEffect(() => {
    showSlider(direction);
  }, [active, direction]);

  const showSlider = (type) => {
    const carousel = document.querySelector('.carousel');
    carousel.style.pointerEvents = 'none';

    // find Item Active Old
    let itemActiveOld = document.querySelector('.carousel .list .item.active');
    if (itemActiveOld) itemActiveOld.classList.remove('active');
    
    setZIndex((prev) => prev + 1);
    document.querySelectorAll('.carousel .list .item')[active].style.zIndex = zIndex;
    document.querySelectorAll('.carousel .list .item')[active].classList.add('active');

    if (type === 'next') {
      carousel.style.setProperty('--transform', '300px');
    } else {
      carousel.style.setProperty('--transform', '-300px');
    }
    carousel.classList.add('effect');

    // dots
    let dotActiveOld = document.querySelector('.dots li.active');
    if (dotActiveOld) dotActiveOld.classList.remove('active');
    document.querySelectorAll('.dots li')[active].classList.add('active');

    setTimeout(() => {
      carousel.classList.remove('effect');
      carousel.style.pointerEvents = 'auto';
    }, 1500);    
  };

  return (
    <div className="carousel">
      <div className="list">
        {items.map((item, index) => (
          <div
            key={index}
            className={`item ${index === active ? 'active' : ''} ${direction}`}
            style={{
              '--img-src': `url(${item.imgSrc})`,
              '--bg-color': item.bgColor,
              '--title': `'${item.title}'`,
              zIndex: index === active ? zIndex : 1
            }}
          >
            <div className="content">
              <div className="image" style={{ backgroundImage: `url(${item.imgSrc})` }}></div>
              <div className="info">
                <div className="title">{item.description}</div>
                <div className="category">{item.category}</div>
                <div className="des">{item.details}</div>
                <a href="">
                  See More <span>&#8594;</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button id="prev" onClick={handlePrev}>&lt;</button>
        <button id="next" onClick={handleNext}>&gt;</button>
      </div>
      <ul className="dots">
        {items.map((_, index) => (
          <li
            key={index}
            className={index === active ? 'active' : ''}
            onClick={() => handleDotClick(index)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Carousel;
