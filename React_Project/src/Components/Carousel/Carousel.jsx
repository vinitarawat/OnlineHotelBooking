import React from 'react';

import PrimaryButton from '../Buttons/PrimaryButton';
import LightButton from '../Buttons/LightButton';
import withAnimation from '../../hoc/withAnimation.jsx';
import './Carousel.css'


const Carousel = () => {
  return (
    <div className="container-fluid p-0 mb-5">
      <div id="header-carousel" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="w-100" src="/img/carousel-1.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '700px' }}>
                <h6 className="section-title text-white text-uppercase mb-3">Luxury Living</h6>
                <h1 className="display-3 text-white mb-4 animated slideInDown fontWeight">Discover A Brand Luxurious Hotel</h1>
                <PrimaryButton href="/rooms" class="animated.flipOutX">Our Rooms</PrimaryButton>
                <LightButton href="/book-a-room">Book A Room</LightButton>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img className="w-100" src="/img/carousel-2.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: '700px' }}>
                <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">Luxury Living</h6>
                <h1 className="display-3 text-white mb-4 animated slideInDown fontWeight">Discover A Brand Luxurious Hotel</h1>
                <PrimaryButton href="/rooms" class="animated.flipOutX">Our Rooms</PrimaryButton>
                <LightButton href="/book-a-room">Book A Room</LightButton>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default withAnimation(Carousel, 'animate__slideInDown');
