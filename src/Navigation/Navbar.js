import logo from '../assets/logo.svg';
import './Navbar.css';

export const Navbar = ({ navtext, className }) => {
 return (
  <nav className={className}>
   <div className="logo-container">
    <a href="#home">
     <img src={logo} alt="" style={{ 'width': '5rem' }} className="logo" />
    </a>
    <h1 className="navtext">{navtext}</h1>
   </div>
   <ul>
    <li>
     <a href="#history">
      01. History
     </a>
    </li>
    <li>
     <a href="#teams">
      02. Teams
     </a>
    </li>
   </ul>
  </nav>
 )
}

export const Footer = () => {
 return (
  <footer>
   <div className="footer section">
    <div className="footer logo-container">
     <a href="#home">
      <img src={logo} alt="" style={{ 'width': '5rem' }} className="logo" />
     </a>
     <h1 className="navtext">Los Angeles Mountains</h1>
    </div>
    <p>
     COPYRIGHT &copy; 2016
    </p>
   </div>
  </footer>
 )
}
