import React from 'react';
import logo from '../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <div className='container'>
        <a className='navbar-brand logo' aria-current='page' href='#'>
          <img className='logo' src={logo} alt='..logo'></img>
        </a>
        <button
          className='navbar-toggler button'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav ms-auto'>
            <a className='nav-link' data-hover='約' href='#'>
              about
            </a>
            <a className='nav-link' data-hover='プロジェクト' href='#'>
              projects
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
