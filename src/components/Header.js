import React from 'react';
import image from '../andrew_.jpeg';
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className='header-wrap'>
      <div className='main-info'>
        <h2>
          Andrew Carey... web developer & software engineer
          <br />
          <Typed
            className='typed-text'
            loop={4}
            backSpeed={60}
            typeSpeed={60}
            strings={[
              'front end',
              'back end',
              'debugging',
              'testing',
              'database',
              'code documentation',
            ]}
          />
        </h2>
      </div>
      <div>
        <div className='header-wrapper'>
          <img className='picture_self' src={image} alt='me' />
          <div className='btn-main'>
            <a href='#' className='btn-contact'>
              contact
            </a>
            <a href='#' className='btn-resume'>
              resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
