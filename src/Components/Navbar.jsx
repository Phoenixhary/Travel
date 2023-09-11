import React, { useState } from "react";
import {HiMenuAlt3} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Navbar = () => {

      const  [Nav, setNav] = useState(false);

       const HandleClick = () => {
            setNav(!Nav);
        };

    return ( 
        <div className="absolute w-full justify-between items-center p-4 flex">
            <h1 className=" z-20 font-bold text-white text-2xl"> Experience </h1>
            <HiMenuAlt3 size={30} onClick={HandleClick} className=" z-20 text-white font-bold cursor-pointer"/>
            <div className={Nav ? 'duration-500 fixed text-white w-full h-screen px-4 py-7 flex-col top-0 left-0 bg-black/80 z-10' :
             'absolute top-0 right-0 left-0  h-0 opacity-0 duration-1000 z-10' } >
                <ul className="flex flex-col justify-center items-center w-full h-screen">
                    <li className="font-bold p-6 text-3xl cursor-pointer">
                    <Link onClick={HandleClick} to="Home" smooth={true} duration={500}>
                      Home
                   </Link>
                    </li>
                    <li className="font-bold p-6 text-3xl cursor-pointer">
                    <Link onClick={HandleClick} to="destinations" smooth={true} duration={500}>
                      Destinations
                   </Link>
                    </li>
                    <li className="font-bold p-6 text-3xl cursor-pointer">
                    <Link onClick={HandleClick} to="destinations" smooth={true} duration={500}>
                      Reservations
                   </Link>
                    </li>
                    <li className="font-bold p-6 text-3xl cursor-pointer">
                    <Link onClick={HandleClick} to="room" smooth={true} duration={500}>
                      Rooms
                   </Link>
                    </li>
                    <li className="font-bold p-6 text-3xl cursor-pointer">
                    <Link onClick={HandleClick} to="amen" smooth={true} duration={500}>
                      Amenities
                   </Link>
                    </li>
                </ul>
            </div>
        </div>
     );
}
 
export default Navbar;