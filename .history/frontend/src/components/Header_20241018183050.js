import React from 'react';
import Logo from './Logo';
import {CiSearch} from 'react-icons/ci';
import {FaRegCircleUser} from 'react-icons/fa6';
import {FaShoppingCart} from 'react-icons/fa';

const Header = () => {
  return (
    <header className="h-16 shadow-md bg-white">
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className="">
          <Logo w={90} h={50} />
        </div>

        <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2">
          <input
            type="text"
            placeholder="Search product here..."
            className="w-full outline-none"
          />
          <div className="text-lg min-w-[50px] h-8 flex items-center justify-center bg-red-600 rounded-r-full text-white">
            <CiSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer">
            <FaRegCircleUser />
          </div>

          <div className="text-2xl relative">
            <span><FaShoppingCart /></span>
            <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
              <p className="text-sm">0</p>
            </div>
          </div>

          <div>
            <button className="px-2 py-1 bg-red-600 rounded-full text-white hover:bg-red-700">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
