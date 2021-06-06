import './AdminHome.css'

import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from '../container/SidebarData';


import { IconContext } from 'react-icons';

const AdminHome = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            {/* <div className="container"> */}
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items'>
                        <li className='nav-text'>
                            <span>    Home </span>
                        </li>
                        <li className='nav-text'>
                            <span>    Home </span>
                        </li>
                        <li className='nav-text'>
                            <span>    Home </span>
                        </li>
                        <li className='nav-text'>
                          
                          <ul>
                              <li>
                              <span>    Home1 </span>
                              
                              </li>
                              <li>
                              <span>    Home2 </span>
                              
                              </li>
                              <li>
                              <span>    Home3 </span>
                              
                              </li>
                          </ul>
                         
                        </li>
                    </ul>

                </nav>
            </IconContext.Provider>
            {/* </div> */}
        </>
    );
}

export default AdminHome;