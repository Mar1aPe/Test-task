import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navigation'>
            <ul>

                <li>
                    <NavLink to='/' exact='true'><i class="fas fa-user"></i></NavLink>
                </li>
                <li>
                    <NavLink to='/gallery'><i class="far fa-image"></i></NavLink>
                </li>


            </ul>
        </div>
    );
}

export default Navbar;