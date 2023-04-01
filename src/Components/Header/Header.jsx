import React from 'react';
import logo from '../../images/profile3.png';

const Header = () => {
  return (
    <nav className='header py-12 md:py-6 lg:py-8 px-8 md:px-32 lg:px-32 max-w-screen-2xl mx-auto'>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>Knowledge Cafe</h2>
        <div>
          <img src={logo} alt='' className='h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-full' />
        </div>
      </div>
    </nav>
  );
};

export default Header;
