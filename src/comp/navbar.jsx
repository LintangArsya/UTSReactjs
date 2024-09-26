import React from 'react';  
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=" flex justify-center w-full bg-green-400 p-2 ">
            <div className="container flex justify-between gap">
                <div className="flex items-center ">
                    <img src="logofd1.png" alt="" width='90px' />
                    <h1 className='text-2xl font-bold'>Nusantara <br />Food&Drink</h1>
                </div>
                <div className=" flex text-black items-center gap-8 text-2xl ">
                    <Link to="/"  className='hover:text-white ' >Home</Link>
                    <Link to="/food" className='hover:text-white ' >Food</Link> 
                    <Link to="/drink" className='hover:text-white' >Drink</Link>
                    <Link to="/about" className='hover:text-white' >About</Link>
            {/* <div className=" flex bg-lime-500 rounded-full w-28 h-12 items-center justify-center hover:bg-gray-600 transition ease-in-out duration-300 ">
            <a href="">Log In</a>
          </div> */}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
