import React from 'react';
import Logo from './Logo';
import {CiSearch} from 'react-icons/ci';

const Header = () => {
  return (
    <header className="h-16 shadow-md">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Logo w={90} h={50} />
        </div>

        <div>
          <input type="text" placeholder="Search product here..." />
          <div>
            <CiSearch />
          </div>
        </div>

        <div>
          User icons and card
        </div>
      </div>
    </header>
  );
};

export default Header;
