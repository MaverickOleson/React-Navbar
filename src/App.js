import './styles/main.css';
import {FaFacebook, FaTwitter, FaBehance} from 'react-icons/fa';
import {SiLinkedin} from 'react-icons/si';

function App() {
  return (
    <nav className=''>
      <h3 className='title'>Random Business</h3>
      <div className='links'>
        <div>
          <p>Home</p>
          <p>About</p>
          <p>Products</p>
          <p>Cart</p>
        </div>
        <div>
          <FaFacebook/>
          <FaTwitter/>
          <SiLinkedin/>
          <FaBehance/>
        </div>
      </div>
    </nav>
  );
}

export default App;
