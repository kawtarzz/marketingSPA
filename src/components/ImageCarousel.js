import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Component } from 'react';
import peak from '../assets/peak.jpg';
import mountainphoto from '../assets/mountainphoto.jpg';
import {
 Carousel
} from 'react-responsive-carousel';
import './index.css';


class ImageCarousel extends Component {
 render() {
  return (
   <Carousel className="carousel">
    <div className="carousel-img">
     <img src={peak} alt='peak' />
     <p className='legend'>Mountain Photo #1</p>
    </div>
    <div className="carousel-img">
     <img src={mountainphoto} alt='mountainphoto' />
     <p className='legend'>Mountain Photo #2</p>
    </div>
    <div className="carousel-img">
     <img src={peak} alt='peak' />
     <p className='legend'>Mountain Photo #3</p>
    </div>
   </Carousel>
  )
 }
};

export default ImageCarousel;