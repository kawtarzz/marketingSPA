import React, { Component, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Modal from 'react-responsive-modal';
import peak from '../assets/peak.jpg';
import mountainphoto from '../assets/mountainphoto.jpg';
import './index.css';

class ImageCarousel extends Component {
 constructor() {
  super();
  this.state = {
   showModal: false,
   selectedImage: null,
  };
 }

 openModal = (image) => {
  this.setState({
   showModal: true,
   selectedImage: image,

  });
 };

 closeModal = () => {
  this.setState({
   showModal: false,
   selectedImage: null,
  });
 };

 render() {
  return (
   <div>
    <Carousel className="carousel-container">
     <div>
      <img src={peak} alt="peak" />
      <p className="legend">Mountain Photo #1</p>
     </div>
     <div>
      <img src={mountainphoto} alt="mountainphoto" />
      <p className="legend">Mountain Photo #2</p>
     </div>
    </Carousel>

   </div>
  );
 }
}

export default ImageCarousel;
