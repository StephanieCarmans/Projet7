import React from 'react';

//import pour les liens de navigations du menu
import { NavLink } from 'react-router-dom';

//importation du logo
import Logo from '../assets/.LOGO-1.png';

function Header() {
      return (
            <nav className="header">
                  <NavLink to="/">
                        <img src={Logo} alt="Kasa" className="header__logo" />
                  </NavLink>

                  <div className="header__navbar">
                        <NavLink to="/" className="header__navbar--link">
                              Accueil
                        </NavLink>

                        <NavLink to="/about" className="header__navbar--link">
                              A Propos
                        </NavLink>
                  </div>
            </nav>
      );
}

export default Header;
