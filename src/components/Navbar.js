import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navigation'>
            <ul>

                <li>
                    <NavLink to='/' exact><i className="fas fa-user"></i></NavLink>
                </li>
                <li>
                    <NavLink to='/gallery'><i className="far fa-image"></i></NavLink>
                </li>


            </ul>
        </div>
    );
}

export default Navbar;