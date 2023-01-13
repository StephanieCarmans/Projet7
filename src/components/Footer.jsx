import React from 'react';

//importation du logo
import Logo from '../assets/.LOGO-2.png';

function Footer() {
      return (
            <footer className="footer">
                  <img src={Logo} alt="Kasa" className="footer__logo" />
                  <p className="footer__text">
                        &copy; 2022 Kasa. All rights reserved
                  </p>
            </footer>
      );
}

export default Footer;
