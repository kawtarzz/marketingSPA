import { Navbar } from './Navigation/Navbar';
import './App.css';
import ImageCarousel from './components/ImageCarousel';
function App() {

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
        <div className="container">
          <div className="content container">

            <h1>01. History</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor eget facilisis ultricies, quam urna ultricies nunc, nec ultricies eros nulla id nunc. Sed ac urna euismod, aliquet ipsum quis, ultrices felis. Nullam auctor, dolor quis aliquet consectetur, nisl nunc efficitur ipsum, sed iaculis lacus enim ac nisl. Donec id nunc vel nunc ultricies consequat.
            </p>

            <ImageCarousel />
            <div className="schedule container">

              <h3>CLIMB SCHEDULE</h3>
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
        </div>
      </section>
      <section className="section teams-img" id="teams">
        <div className="container">
          <div className="content container">

            <h1>02. Teams</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, tortor eget facilisis ultricies, quam urna ultricies nunc, nec ultricies eros nulla id nunc. Sed ac urna euismod, aliquet ipsum quis, ultrices felis. Nullam auctor, dolor quis aliquet consectetur, nisl nunc efficitur ipsum, sed iaculis lacus enim ac nisl. Donec id nunc vel nunc ultricies consequat.
            </p>
          </div>
        </div>

        <ImageCarousel />

      </section>
      <section className="footer section">
        <div className="container">

          <h2>Footer</h2>
          <p>Copyright
            2016 Mountain Travel All Rights Reserved
          </p>
        </div>
      </section>



    </main>
  );
}

export default App;
