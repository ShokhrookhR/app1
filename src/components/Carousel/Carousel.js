import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const items = [
  <img src="https://picsum.photos/1200/450" onDragStart={handleDragStart} />,
  <img src="https://picsum.photos/1200/450" onDragStart={handleDragStart} />,
  <img src="https://picsum.photos/1200/450" onDragStart={handleDragStart} />,
];

const Carousel = () => {
  return (
	 <div>
        <AliceCarousel mouseTracking items={items} />

	 </div>
  )
}

export default Carousel