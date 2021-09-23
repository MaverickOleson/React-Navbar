import React, {useState} from 'react';
import './styles/main.css';
import {HiMenu} from 'react-icons/hi';
import {FaFacebook, FaTwitter, FaBehance} from 'react-icons/fa';
import {SiLinkedin} from 'react-icons/si';

function App() {
  const [nav, setNav] = useState(false);
  return (
    <nav className=''>
      <h3 className='title'>Random Business</h3>
      <HiMenu className='menu' onClick={()=>setNav(!nav)}/>
      <div style={(nav) ? {display: 'flex'} : {display: 'none'}}>
        <p>Home</p>
        <p>About</p>
        <p>Products</p>
        <p>Cart</p>
      </div>
      <div style={(nav) ? {display: 'flex'} : {display: 'none'}}>
        <FaFacebook/>
        <FaTwitter/>
        <SiLinkedin/>
        <FaBehance/>
      </div>
    </nav>
  );
}

export default App;
