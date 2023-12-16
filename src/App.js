import { Navbar } from './Navigation/Navbar';
import './App.css';
import ImageCarousel from './components/ImageCarousel';
import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Footer } from './Navigation/Navbar';


function App() {

  const [showTab1, setShowTab1] = useState(true);
  const [showTab2, setShowTab2] = useState(false);

  const toggleTab1 = () => {
    setShowTab1(true);
    setShowTab2(false);
  }

  const toggleTab2 = () => {
    setShowTab1(false);
    setShowTab2(true);
  }

  return (
    <main>
      <section className="hero" id="home">
        <div className="hero landing-img">
          <div className="container">
            <Navbar className={"main navigation"} />
          </div>
        </div>
      </section>
      <div className="container">
        <Navbar navtext={`Los Angeles Mountains`} className={"secondary navigation"} />
      </div>

      <section className="hero history-img" id="history">
        <div className="history container">
          <div className="title">
            <h1>01.</h1>
            <h2>
              History
            </h2>
          </div>
          <div className="content container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor eget facilisis ultricies, quam urna ultricies nunc, nec ultricies eros nulla id nunc. Sed ac urna euismod, aliquet ipsum quis, ultrices felis. Nullam auctor, dolor quis aliquet consectetur, nisl nunc efficitur ipsum, sed iaculis lacus enim ac nisl. Donec id nunc vel nunc ultricies consequat.
            </p>
          </div>
        </div>
        <div className="carousel-bg">
          <ImageCarousel />
        </div>
      </section>

      <section className="section" id="teams">
        <div className="climb container">
          <div className="title-2">
            <h1>02.
            </h1>
            <h2>
              Climb
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor eget facilisis ultricies, quam urna ultricies nunc, nec ultricies eros nulla id nunc.
            </p>
          </div>
        </div>
      </section>

      <div className="teams tabs-container">
        <div className="teams tab-1">
          <button className="tab" onClick={toggleTab1}>Mountain 1</button>
        </div>
        <div className="teams tab-2">
          <button className="tab" onClick={toggleTab2}>Mountain 2</button>
        </div>
      </div>
      {showTab1 && (
        <section className='hero teams-img1 section'>
          <div className="container">
            <div className="schedule container">
              <h2>
                SCHEDULE
              </h2>
              <ul>
                <li>Monday - Friday: 08:00 AM - 10:00 PM</li>
                <li>Saturday: 08:00 AM - 11:30 PM</li>
                <li>Sunday: 09:00 AM - 09:00 PM</li>
              </ul>
              <h3>CONTACT INFO</h3>
              <ul>
                <li>Phone: 213-974-7352</li>
                <li>Email: Climb@LosAngelesMountain.com </li>
              </ul>
            </div>
          </div>
        </section>
      )}
      {
        showTab2 && (
          <section className='hero teams-img2 section'>
            <div className="container">
              <div className="schedule container">
                <h2>
                  SCHEDULE
                </h2>
                <ul>
                  <li>Monday - Friday: 08:00 AM - 10:00 PM</li>
                  <li>Saturday: 08:00 AM - 11:30 PM</li>
                  <li>Sunday: 09:00 AM - 09:00 PM</li>
                </ul>
                <h3>CONTACT INFO</h3>
                <ul>
                  <li>Phone: 213-974-7352</li>
                  <li>Email: Climb@LosAngelesMountain.com </li>
                </ul>
              </div>
            </div>
          </section>)
      }
      <section className="section footer">
        <div className="footer container">

          <Footer />
        </div>
      </section>


    </main>
  );
}

export default App;
