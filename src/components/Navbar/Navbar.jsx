import React, { useContext } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { PiStorefront, PiUserCircle } from 'react-icons/pi';
import { Link } from 'react-router';
import useAuth from '../../hooks/useAuth';
import toast from 'react-hot-toast';

const Navbar = () => {
  const isAdmin = false;
  const {user, logoutUser} = useAuth();

    const handleLogout = () => {
        logoutUser();
        toast.success("Logout successful!")
    }
  return (
    <div className='bg-[#f95c07] text-white'>
      {/* nav-1  */}
      <div className="navbar justify-between container mx-auto px-2">
        <div className="navbar-start w-auto md:w-1/3">
          <Link to={'/'} className="font-semibold text-xl ">QuickMart</Link>
        </div>

        {/* Search bar  */}
        <div className="navbar-center w-52 md:w-96 xl:w-[500px] hidden md:block">
          <label className="input w-full">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
            <input type="search" className="grow text-gray-700" placeholder="Search here" />

          </label>
        </div>

        <div className="navbar-end grow">
          <ul className='menu menu-horizontal px-1 flex items-center'>
            <li><Link ><IoCartOutline size={20} />  <span className='hidden lg:block'>Cart</span></Link></li>
            <li><Link > <PiStorefront size={20} /> <span className='hidden lg:block'>Become a Seller</span></Link></li>
            {/* <li><Link > <MdOutlineAccountCircle size={20} /> Login</Link></li> */}
            <div className="dropdown">
                                <div tabIndex={0} role="button" className="text-right p-1.5 hover:bg-base-300 cursor-pointer rounded-md">{user ? <span className='border-2 rounded-full h-6 w-6 flex items-center justify-center '>{user?.displayName?.slice(0, 1)}</span> : < PiUserCircle size={20} />}</div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-36 -right-1 pr-0 top-7 shadow-sm text-gray-900">
                                    {
                                        user ?
                                            <div>
                                                {/* <li className=''><Link to='/dashboard/my-orders' >Dashboard</Link>
                                                </li> */}
                                                 <li className=''>
                                                {
                                                    isAdmin ? <Link to='/dashboard/manage-orders' >Dashboard</Link> : <Link to='/dashboard/my-orders' >Dashboard</Link>
                                                }
                                            </li>
                                                <li className=''><button onClick={handleLogout}>Logout</button></li></div> :
                                            <li className=''><Link to='/login' >Login</Link></li>
                                    }
                                </ul>
                            </div>
          </ul>
        </div>
      </div>

      {/* nav-2  */}
      <div className="navbar shadow-sm md:hidden">
        <div className="navbar-center w-full block md:hidden">
          {/* Search bar  */}
          <label className="input w-full">
            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
            <input type="search" className="grow text-gray-700" placeholder="Search here" />

          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;