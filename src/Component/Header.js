import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import '../App.css'; 
const Header = () => {
  return (
    <div>
      <div className='bg-zinc-600 h-16 w-full text-white font-serif flex justify-center items-center'>
       <ul className='flex gap-2'>
       <li><NavLink exact to="/" >Home</NavLink></li>
          <li><NavLink to="/about" >About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
       </ul>
       <div className='right-4 absolute'>
       <Link to="/Home/Adduser" className='bg-blue-300 p-2 rounded-md text-black '>Adduser</Link>
       </div>
      </div>
    </div>
  );
};

export default Header;
