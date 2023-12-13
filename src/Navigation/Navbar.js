import logo from '../assets/logo.svg';
import './Navbar.css';

export const Navbar = ({ navtext, className }) => {
 return (
  <nav className={className}>
   <a href="#home">
    <div className="logo">
     <img src={logo} alt="" style={{ 'width': '5rem' }} />
     <h1 className="navtext">{navtext}</h1>
    </div>
   </a>
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
