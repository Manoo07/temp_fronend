import React, { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import '../App.css'


function NavBar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  const handleNavLinkClick = (label) => {
    if(label!='Upload File'){
      localStorage.removeItem('filename')
    }
    setActiveLink(label);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <div className='flex flex-col'>
          <p className=" self-center text-2xl font-semibold whitespace-nowrap 
         text-white tracking-wider">Chanakya
          </p> 
          <p className='text-[0.625rem] text-white text-right'>by <b>OSI Digital</b></p>
        </div>
        </a>
        <button 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-default" 
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li className={`p-2 ${location.pathname == '/' ? 'active-link':' text-white'}`}>
              <NavLink
                to="/"
                exact
                activeClassName="active"
                onClick={() => handleNavLinkClick('Interact with Chanakya')}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent `}
              >
                <span>Interact with Chanakya</span>
              </NavLink>
            </li>
            <li className={`p-2 ${location.pathname == '/query/database' ? 'active-link':'text-white'}`}>
              <NavLink
                to="/query/database"
                activeClassName="active"
                onClick={() => handleNavLinkClick('Query Database')}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent `}

              >
                Query Database
              </NavLink>
            </li>
            <li className={`p-2 ${location.pathname == '/query/pdf' ? 'active-link':'text-white'}`}>
              <NavLink
                to="/query/pdf"
                activeClassName="active"
                onClick={() => handleNavLinkClick('Upload File')}
                className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent  `}
              >
                Upload File
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
