import React, {useState} from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import './Navbar.css'
import Logo from '../assets/Early Warning System - Logo.png';
import Popuptrigger from '../Notification/Popuptrigger';



const Navbar = () => {
  return (
    <div className="bg-white py-2.5 dark:bg-gray-900">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex-item-center">
            <img className="Logo" src={Logo} alt="Flowbite Logo"/>
        </div>
        <div class="hidden w-full md:block md:w-auto">
            <ul class="flex flex-col mt-4 md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium">
                <li className="md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white font-bold">
                <a href="#" >Home</a>
                </li>
                <li className="md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white font-bold">
                <a href="#" >About</a>
                </li>
                <li className="md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white font-bold">
                <a href="#" >Information</a>
                </li>
                <li className="md:hover:bg-transparent md:p-0 dark:text-gray-400 md:dark:hover:text-white font-bold">
                <a href="#" >Contact</a>
                </li>
                <li className="md:hover:text-red-500 md:hover:bg-transparent md:p-0 dark:text-gray-400 font-bold">
                <a href="#" onClick={Popuptrigger}>Notification</a>
                </li>
            </ul>
        </div>
        <div className="hidden md:flex md:space-x-5 pr-1">
          <button className="border-none bg-transparent text-white hover:bg-transparent font-bold hover:text-blue-500">Sign In</button>
          <button className="px-2 py-1 bg-white rounded-lg border-transparent font-medium hover:bg-blue-500 hover:text-white}">Sign UP</button>
        </div>
      </div>
      {/* <MenuIcon className="w-5"/> */}
    </div>
  );
};

export default Navbar;