import React, {useState, useEffect} from 'react';
import './styles/main.css';
import {HiMenu} from 'react-icons/hi';
import {FaFacebook, FaTwitter, FaBehance} from 'react-icons/fa';
import {SiLinkedin} from 'react-icons/si';

function App() {
  const [nav, setNav] = useState(false);
  const [menu, setMenu] = useState(null);
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  return (
    <nav className=''>
      <h3 className='title'>Random Business</h3>
      <HiMenu className='menu' onClick={()=>{setTimeout(()=>{setNav(!nav)}, 300); setMenu(!menu)}} style={(menu) ? {animation: 'openMenu 0.3s ease-out forwards'} : (menu !== null) ? {animation: 'closeMenu 0.3s ease-out forwards'} : null}/>
      <div style={(nav || size > 983) ? {display: 'flex'} : {display: 'none'}}>
        <p></p>
        <p>About</p>
        <p>Products</p>
        <p>Cart</p>
      </div>
      <div style={(nav || size > 983) ? {display: 'flex'} : {display: 'none'}}>
        <FaFacebook/>
        <FaTwitter/>
        <SiLinkedin/>
        <FaBehance/>
      </div>
    </nav>
  );
}

export default App;
