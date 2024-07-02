import React from 'react';
import logo from './gmail.png';
const Header = () => {
  // Import result is the URL of your image
  return (
    <div>
      <div id='new' style={{paddingTop: '-1900px'}}>
        <img src={logo} alt="Logo" style={{ width: '30px', height: '30px' }} />
      </div>
      <div id='phone'>
        <img src={logo} alt="Logo" style={{ width: '30px', height: '30px' }} />
      </div>
    </div>
  );
};

export default Header;
